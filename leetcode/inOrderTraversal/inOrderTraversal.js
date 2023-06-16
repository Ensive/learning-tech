var inorderTraversal = function(root) {
    if (!root) return [];
    return traverse(root, []);
};

function traverse(node, output) {
    if (node.left) traverse(node.left, output);
    output.push(node.val);
    if (node.right) traverse(node.right, output)

    return output;
}
