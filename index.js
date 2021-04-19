import ReactButton from "./components/ReactButton";
import PublishButton from "./components/PublishButton";
import ErrorBoundary from "./components/ErrorBoundary";
import findInReactTree from "./findInReactTree";

const {
	React,
	findModule,
	findModuleByProps,
	findModuleByDisplayName,
	Patcher,
	getData,
	saveData,
} = BdApi;

const MiniPopover = findModule(
	(m) => m?.default?.displayName === "MiniPopover"
);

const SwitchItem = findModuleByDisplayName("SwitchItem");

const ConfirmationActions = findModuleByProps("confirmDelete");
const MessageActions = findModuleByProps("deleteMessage");
const FluxDispatcher = findModuleByProps("dirtyDispatch");

let emojiPickerMessage = "";
let addedListener = false;

export default class ShowAllMessageButtons {
	start() {
		Patcher.after(
			this.constructor.name,
			MiniPopover,
			"default",
			(that, args, ret) => {
				const props = findInReactTree(
					ret,
					(r) => r?.hasOwnProperty("expanded") && r?.hasOwnProperty("message")
				);
				if (!props) return ret;

				// Force the buttons to be expanded.
				props.expanded = true;

				// I am Really NOT Amused.
				// Add my own react button because it's removed for some reason.
				// TODO: Make the message stay "hovered" when the emoji picker is open.
				if (props.message.id == emojiPickerMessage) {
					props.showEmojiPicker = true;
					if (!addedListener) {
						addedListener = true;

						// Listen for clicks and only stop listening once the picker is removed.
						const pickerClick = (event) => {
							const onPicker =
								event.path.filter(
									(element) => element.id == "emoji-picker-tab-panel"
								).length == 1;
							if ((onPicker && !event.shiftKey) || !onPicker) {
								removePickerClick();
								addedListener = false;
								emojiPickerMessage = "";
								// Timeout or the reaction won't be added.
								setTimeout(() => {
									this.updateMessage(props.message, false);
								}, 0);
							}
						};
						const removePickerClick = () => {
							document.body.removeEventListener("click", pickerClick);
						};

						document.body.addEventListener("click", pickerClick);
					}
				}
				if (props.canReact) {
					ret.props.children.splice(
						ret.props.children.length - 2,
						0,
						<ErrorBoundary fallback={(() => null)()}>
							<ReactButton
								showEmojiPicker={(show) => {
									this.updateMessage(props.message, show);
								}}
							/>
						</ErrorBoundary>
					);
				}
				// Not quite as annoying as the react button.
				if (props.canPublish) {
					ret.props.children.splice(
						ret.props.children.length - 2,
						0,
						<ErrorBoundary fallback={(() => null)()}>
							<PublishButton
								id={props.message.id}
								channel_id={props.message.channel_id}
							/>
						</ErrorBoundary>
					);
				}

				return ret;
			}
		);

		if (this.canBypassDeleteConfirmation()) this.patchConfirmDelete();
	}

	canBypassDeleteConfirmation() {
		return !!getData(this.constructor.name, "bypassDeleteConfirmation") ?? true;
	}

	patchConfirmDelete() {
		this.unpatchConfirmDelete();
		this.confirmDelete = Patcher.instead(
			this.constructor.name,
			ConfirmationActions,
			"confirmDelete",
			(that, args) => {
				MessageActions.deleteMessage(args[0].id, args[1].id);
			}
		);
	}

	unpatchConfirmDelete() {
		try {
			this.confirmDelete();
		} catch {}
	}

	stop() {
		if (this.patchMiniPopoverAnonInterval) {
			clearInterval(this.patchMiniPopoverAnonInterval);
			this.patchMiniPopoverAnonInterval = null;
		}
		Patcher.unpatchAll(this.constructor.name);
	}

	getSettingsPanel() {
		return () => {
			const [
				bypassDeleteConfirmation,
				setBypassDeleteConfirmation,
			] = React.useState(this.canBypassDeleteConfirmation());

			return (
				<ErrorBoundary>
					<SwitchItem
						value={bypassDeleteConfirmation}
						onChange={(value) => {
							setBypassDeleteConfirmation(value);
							saveData(
								this.constructor.name,
								"bypassDeleteConfirmation",
								value
							);
							if (value) {
								this.patchConfirmDelete();
							} else {
								this.unpatchConfirmDelete();
							}
						}}
						note="When enabled this will bypass the delete message confirmation and delete the message right away."
					>
						Bypass Delete Confirmation
					</SwitchItem>
				</ErrorBoundary>
			);
		};
	}

	updateMessage(message, showEmojiPicker) {
		emojiPickerMessage = showEmojiPicker ? message.id : "";
		FluxDispatcher.dirtyDispatch({
			type: "MESSAGE_UPDATE",
			message,
		});
	}
}
