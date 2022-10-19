// Given a binary tree, and a target number, find if there is a path from the root to any leaf that sums up to the target.

class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

const n6 = new Node(6);
const n4 = new Node(4);
const n3 = new Node(3, null, n4);
const n2 = new Node(2, null, n6);
const n1 = new Node(1, n2, n3);

function walk(node, target) {
  // if (node.left === null && node.right === null) {
  //   if (target - node.value === 0) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  // target -= node.value;
  // if (node.left) walk(node.left, target);
  // if (node.right) walk(node.right, target);

  if (node === null) {
    return target === 0;
  } else {
    return (
      walk(node.left, target - node.value) ||
      walk(node.right, target - node.value)
    );
  }
}

function findPathForTarget(node, target) {
  // we need to traverse binary in-order
  // cache sum of node values until we hit a terminal node
  // once we hit the terminal node we check if sum equals a target node value

  // edge case root value - target value = 0

  return walk(node, target);
}

function assert(actual, expected) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log('TEST PASSED');
    return 0;
  }

  console.log('\tTEST FAILED');
  console.log('\tactual :>> ', actual);
  console.log('\texpected :>> ', expected);
}

assert(findPathForTarget(n1, 9), true);

// Here's an example and some starter code.

// class Node:
//   def __init__(self, value, left=None, right=None):
//     self.value = value
//     self.left = left
//     self.right = right

// def target_sum_bst(root, target):
//   # Fill this in.

// #      1
// #    /   \
// #   2     3
// #    \     \
// #     6     4
// n6 = Node(6)
// n4 = Node(4)
// n3 = Node(3, None, n4)
// n2 = Node(2, None, n6)
// n1 = Node(1, n2, n3)

// print(target_sum_bst(n1, 9))
// # True
// # Path from 1 -> 2 -> 6
