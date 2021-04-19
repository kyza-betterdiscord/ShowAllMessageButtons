/**
 * @name ShowAllMessageButtons
 * @description Forces the utility buttons on messages hidden in the context menu to always be displayed as buttons.
 * @author Kyza
 * @version 1.0.0
 * @license None
 */
(() => {
	"use strict";
	var __webpack_require__ = {};
	(() => {
		__webpack_require__.n = module => {
			var getter = module && module.__esModule ? () => module["default"] : () => module;
			__webpack_require__.d(getter, {
				a: getter
			});
			return getter;
		};
	})();
	(() => {
		__webpack_require__.d = (exports, definition) => {
			for (var key in definition)
				if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) Object.defineProperty(exports, key, {
					enumerable: true,
					get: definition[key]
				});
		};
	})();
	(() => {
		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
	})();
	(() => {
		__webpack_require__.r = exports => {
			if ("undefined" !== typeof Symbol && Symbol.toStringTag) Object.defineProperty(exports, Symbol.toStringTag, {
				value: "Module"
			});
			Object.defineProperty(exports, "__esModule", {
				value: true
			});
		};
	})();
	var __webpack_exports__ = {};
	__webpack_require__.r(__webpack_exports__);
	__webpack_require__.d(__webpack_exports__, {
		default: () => ShowAllMessageButtons
	});
	const {
		React,
		findModule,
		findModuleByProps,
		findModuleByDisplayName
	} = BdApi;
	const MiniPopover = findModule((m => "MiniPopover" === m?.default?.displayName));
	const Tooltip = findModuleByDisplayName("Tooltip");
	const iconClasses = findModuleByProps("icon", "isHeader");
	const ReactButton = React.memo((function(props) {
		return React.createElement(Tooltip, {
			color: "black",
			postion: "top",
			text: "Add Reaction"
		}, (({
			onMouseLeave,
			onMouseEnter
		}) => React.createElement(MiniPopover.Button, {
			ariaLabel: "Add Reaction",
			onClick: () => {
				props.showEmojiPicker(true);
			},
			onMouseEnter,
			onMouseLeave
		}, React.createElement("svg", {
			className: iconClasses.icon,
			"aria-hidden": "false",
			width: "24",
			height: "24",
			viewBox: "0 0 24 24"
		}, React.createElement("path", {
			fill: "currentColor",
			"fill-rule": "evenodd",
			"clip-rule": "evenodd",
			d: "M12.2512 2.00309C12.1677 2.00104 12.084 2 12 2C6.477 2 2 6.477 2 12C2 17.522 6.477 22 12 22C17.523 22 22 17.522 22 12C22 11.916 21.999 11.8323 21.9969 11.7488C21.3586 11.9128 20.6895 12 20 12C15.5817 12 12 8.41828 12 4C12 3.31052 12.0872 2.6414 12.2512 2.00309ZM10 8C10 6.896 9.104 6 8 6C6.896 6 6 6.896 6 8C6 9.105 6.896 10 8 10C9.104 10 10 9.105 10 8ZM12 19C15.14 19 18 16.617 18 14V13H6V14C6 16.617 8.86 19 12 19Z"
		}), React.createElement("path", {
			d: "M21 3V0H19V3H16V5H19V8H21V5H24V3H21Z",
			fill: "currentColor"
		})))));
	}));
	const {
		React: PublishButton_React,
		findModule: PublishButton_findModule,
		findModuleByProps: PublishButton_findModuleByProps,
		findModuleByDisplayName: PublishButton_findModuleByDisplayName
	} = BdApi;
	const PublishButton_MiniPopover = PublishButton_findModule((m => "MiniPopover" === m?.default?.displayName));
	const PublishButton_Tooltip = PublishButton_findModuleByDisplayName("Tooltip");
	const {
		confirmPublish
	} = PublishButton_findModuleByProps("confirmPublish");
	const PublishButton_iconClasses = PublishButton_findModuleByProps("icon", "isHeader");
	const PublishButton = PublishButton_React.memo((function(props) {
		return PublishButton_React.createElement(PublishButton_Tooltip, {
			color: "black",
			postion: "top",
			text: "Publish"
		}, (({
			onMouseLeave,
			onMouseEnter
		}) => PublishButton_React.createElement(PublishButton_MiniPopover.Button, {
			ariaLabel: "Publish",
			onClick: () => {
				confirmPublish(props.channel_id, props.id);
			},
			onMouseEnter,
			onMouseLeave
		}, PublishButton_React.createElement("svg", {
			className: PublishButton_iconClasses.icon,
			"aria-hidden": "false",
			width: "16",
			height: "16",
			viewBox: "0 0 24 24"
		}, PublishButton_React.createElement("path", {
			d: "M3.9 8.26H2V15.2941H3.9V8.26Z",
			fill: "currentColor"
		}), PublishButton_React.createElement("path", {
			d: "M19.1 4V5.12659L4.85 8.26447V18.1176C4.85 18.5496 5.1464 18.9252 5.5701 19.0315L9.3701 19.9727C9.4461 19.9906 9.524 20 9.6 20C9.89545 20 10.1776 19.8635 10.36 19.6235L12.7065 16.5242L19.1 17.9304V19.0588H21V4H19.1ZM9.2181 17.9944L6.75 17.3826V15.2113L10.6706 16.0753L9.2181 17.9944Z",
			fill: "currentColor"
		})))));
	}));
	const external_url_namespaceObject = require("url");
	var external_url_default = __webpack_require__.n(external_url_namespaceObject);
	const external_util_namespaceObject = require("util");
	var external_util_default = __webpack_require__.n(external_util_namespaceObject);
	function _extends() {
		_extends = Object.assign || function(target) {
			for (var i = 1; i < arguments.length; i++) {
				var source = arguments[i];
				for (var key in source)
					if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
			}
			return target;
		};
		return _extends.apply(this, arguments);
	}
	const {
		React: ErrorBoundary_React,
		findModuleByDisplayName: ErrorBoundary_findModuleByDisplayName
	} = BdApi;
	const Text = ErrorBoundary_findModuleByDisplayName("Text");
	let reactInvariants;
	function getInvariants() {
		return new Promise((resolve => {
			fetch("https://raw.githubusercontent.com/facebook/react/master/scripts/error-codes/codes.json").then((response => response.json())).then((body => {
				reactInvariants = body;
				resolve(reactInvariants);
			}));
		}));
	}
	function makeReactErrorString(newReactInvariants, error) {
		const reactUrl = external_url_default().parse(error.message.substring(error.message.indexOf("; visit ") + 8, error.message.indexOf(" for the full message")), true);
		const invariant = reactUrl.query.invariant;
		const args = reactUrl.query["args[]"];
		return newReactInvariants ? `React Invariant Violation #${invariant}\n${external_util_default().format(newReactInvariants[invariant], ...args)}` : "";
	}
	class ErrorBoundary extends ErrorBoundary_React.Component {
		constructor(props) {
			super(props);
			this.state = {
				hasError: false
			};
		}
		static getDerivedStateFromError(error) {
			return {
				hasError: true,
				error
			};
		}
		componentDidCatch(error, info) {
			this.setState({
				hasError: true,
				error,
				info
			}, (() => {
				this.props.onError?.(this.state);
			}));
		}
		render() {
			if (this.state.hasError) {
				const Fallback = this.props.fallback ?? false;
				let reactErrorString;
				if (reactInvariants) {
					reactErrorString = makeReactErrorString(reactInvariants, this.state.error);
					if (!this.props.silent) console.log("[ErrorBoundary]", reactErrorString);
				} else getInvariants().then((newReactInvariants => {
					reactErrorString = makeReactErrorString(newReactInvariants, this.state.error);
					this.setState({
						reactErrorString
					});
					if (!this.props.silent) console.log("[ErrorBoundary]", reactErrorString);
				}));
				if (Fallback) return ErrorBoundary_React.createElement(ErrorBoundary, {
					fallback: () => ErrorBoundary_React.createElement(ErrorBoundary, {
						fallback: () => ErrorBoundary_React.createElement(ErrorBoundary, null, "The ErrorBoundary error error errored. This isn't looking too good.")
					}, ErrorBoundary_React.createElement(Text, null, "The ErrorBoundary error errored."))
				}, ErrorBoundary_React.createElement(Fallback, _extends({}, this.state, {
					reactErrorString: reactErrorString ?? this.state.reactErrorString
				})));
				return null;
			}
			return this.props.children;
		}
	}
	function findInTree(tree, filter, {
		walkable = [],
		exclude = [],
		whileLoop = false,
		maxDepth = 100,
		depth = 0
	} = {}) {
		if (depth === maxDepth) return null;
		if (null === tree || void 0 === tree) return null;
		if ("object" !== typeof tree) return null;
		if ("string" === typeof filter) return tree[filter];
		if (whileLoop) {
			const stack = [tree];
			while (stack.length) {
				const node = stack["reverse" === whileLoop ? "pop" : "shift"]();
				try {
					if (filter(node)) return node;
				} catch {}
				if (stack.length >= maxStack) continue;
				if (Array.isArray(node)) stack.push(...node);
				else if ("object" === typeof node && null !== node)
					if (walkable.length > 0) stack.push(...Object.entries(node).filter((([key, value]) => -1 !== walkable.indexOf(key) && -1 === exclude.indexOf(key))).map((([key, value]) => value)));
					else stack.push(...Object.values(node).filter((key => -1 === exclude.indexOf(key) && node)));
				depth++;
			}
			return null;
		} else {
			let returnValue;
			try {
				if (filter(tree)) return tree;
			} catch {}
			if (Array.isArray(tree))
				for (const value of tree) {
					returnValue = findInTree(value, filter, {
						walkable,
						exclude,
						whileLoop,
						maxDepth,
						depth: depth + 1
					});
					if (returnValue) return returnValue;
				}
			let keys = walkable.length > 0 ? walkable : Object.keys(tree);
			for (const key of keys) {
				if (!tree.hasOwnProperty(key) || exclude.includes(key)) continue;
				returnValue = findInTree(tree[key], filter, {
					walkable,
					exclude,
					whileLoop,
					maxDepth,
					depth: depth + 1
				});
				if (returnValue) return returnValue;
			}
			return null;
		}
	}
	function findInReactTree(tree, filter, {
		whileLoop = false,
		maxDepth = 100,
		depth = 0
	} = {}) {
		return findInTree(tree, filter, {
			walkable: ["props", "children", "child", "sibling"],
			exclude: ["__reactInternalInstance$", "__reactInternalInstance"],
			whileLoop,
			maxDepth,
			depth
		});
	}
	const {
		React: ShowAllMessageButtons_React,
		findModule: ShowAllMessageButtons_findModule,
		findModuleByProps: ShowAllMessageButtons_findModuleByProps,
		findModuleByDisplayName: ShowAllMessageButtons_findModuleByDisplayName,
		Patcher,
		getData,
		saveData
	} = BdApi;
	const ShowAllMessageButtons_MiniPopover = ShowAllMessageButtons_findModule((m => "MiniPopover" === m?.default?.displayName));
	const SwitchItem = ShowAllMessageButtons_findModuleByDisplayName("SwitchItem");
	const ConfirmationActions = ShowAllMessageButtons_findModuleByProps("confirmDelete");
	const MessageActions = ShowAllMessageButtons_findModuleByProps("deleteMessage");
	const FluxDispatcher = ShowAllMessageButtons_findModuleByProps("dirtyDispatch");
	let emojiPickerMessage = "";
	let addedListener = false;
	class ShowAllMessageButtons {
		start() {
			Patcher.after(this.constructor.name, ShowAllMessageButtons_MiniPopover, "default", ((that, args, ret) => {
				const props = findInReactTree(ret, (r => r?.hasOwnProperty("expanded") && r?.hasOwnProperty("message")));
				if (!props) return ret;
				props.expanded = true;
				if (props.message.id == emojiPickerMessage) {
					props.showEmojiPicker = true;
					if (!addedListener) {
						addedListener = true;
						const pickerClick = event => {
							const onPicker = 1 == event.path.filter((element => "emoji-picker-tab-panel" == element.id)).length;
							if (onPicker && !event.shiftKey || !onPicker) {
								removePickerClick();
								addedListener = false;
								emojiPickerMessage = "";
								setTimeout((() => {
									this.updateMessage(props.message, false);
								}), 0);
							}
						};
						const removePickerClick = () => {
							document.body.removeEventListener("click", pickerClick);
						};
						document.body.addEventListener("click", pickerClick);
					}
				}
				if (props.canReact) ret.props.children.splice(ret.props.children.length - 2, 0, ShowAllMessageButtons_React.createElement(ErrorBoundary, {
					fallback: (() => null)()
				}, ShowAllMessageButtons_React.createElement(ReactButton, {
					showEmojiPicker: show => {
						this.updateMessage(props.message, show);
					}
				})));
				if (props.canPublish) ret.props.children.splice(ret.props.children.length - 2, 0, ShowAllMessageButtons_React.createElement(ErrorBoundary, {
					fallback: (() => null)()
				}, ShowAllMessageButtons_React.createElement(PublishButton, {
					id: props.message.id,
					channel_id: props.message.channel_id
				})));
				return ret;
			}));
			if (this.canBypassDeleteConfirmation()) this.patchConfirmDelete();
		}
		canBypassDeleteConfirmation() {
			return !!getData(this.constructor.name, "bypassDeleteConfirmation") ?? true;
		}
		patchConfirmDelete() {
			this.unpatchConfirmDelete();
			this.confirmDelete = Patcher.instead(this.constructor.name, ConfirmationActions, "confirmDelete", ((that, args) => {
				MessageActions.deleteMessage(args[0].id, args[1].id);
			}));
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
				const [bypassDeleteConfirmation, setBypassDeleteConfirmation] = ShowAllMessageButtons_React.useState(this.canBypassDeleteConfirmation());
				return ShowAllMessageButtons_React.createElement(ErrorBoundary, null, ShowAllMessageButtons_React.createElement(SwitchItem, {
					value: bypassDeleteConfirmation,
					onChange: value => {
						setBypassDeleteConfirmation(value);
						saveData(this.constructor.name, "bypassDeleteConfirmation", value);
						if (value) this.patchConfirmDelete();
						else this.unpatchConfirmDelete();
					},
					note: "When enabled this will bypass the delete message confirmation and delete the message right away."
				}, "Bypass Delete Confirmation"));
			};
		}
		updateMessage(message, showEmojiPicker) {
			emojiPickerMessage = showEmojiPicker ? message.id : "";
			FluxDispatcher.dirtyDispatch({
				type: "MESSAGE_UPDATE",
				message
			});
		}
	}
	module.exports = __webpack_exports__.default ?? __webpack_exports__;
})();