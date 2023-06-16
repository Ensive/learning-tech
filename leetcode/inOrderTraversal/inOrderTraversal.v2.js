var inorderTraversal = function (root) {
  if (!root) return [];

  const result = [];

  function traverse(node) {
    if (!node) return;

    traverse(node.left);
    result.push(node.val);
    traverse(node.right);
  }

  traverse(root);

  return result;
};
