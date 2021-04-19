import findInTree from "./findInTree";

export default function findInReactTree(
	tree,
	filter,
	{ whileLoop = false, maxDepth = 100, depth = 0 } = {}
) {
	return findInTree(tree, filter, {
		walkable: ["props", "children", "child", "sibling"],
		exclude: ["__reactInternalInstance$", "__reactInternalInstance"],
		whileLoop,
		maxDepth,
		depth,
	});
}