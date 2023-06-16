var inorderTraversal = function (root) {
  if (!root) return [];

  const result = [];
  const stack = [];
  let currentNode = root;

  while (currentNode || stack.length > 0) {
    while (currentNode) {
      stack.push(currentNode);
      currentNode = currentNode.left;
    }

    currentNode = stack.pop();
    result.push(currentNode.val);
    currentNode = currentNode.right;
  }

  return result;
};
