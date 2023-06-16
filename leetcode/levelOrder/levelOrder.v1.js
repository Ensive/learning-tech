Trying to solve a problem

function levelOrder(root: TreeNode | null): number[][] {
    if (!root) return [];

    let levels = []; // [[3]],
    let count = 0;
    const queue = []; // [3], [9]

    function traverse(node) { // 3,
        queue.push(node.val);

        while (queue.length && node) {
            levels[count] = levels[count] || [];
            levels[count].push(queue.pop())

            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);

            queue.push(node.val);
        }
    }

    traverse(root);

    return levels;
};
