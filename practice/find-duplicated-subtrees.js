// Given a binary tree, find all duplicate subtrees (subtrees with the same value and same structure)
// and return them as a list of list [subtree1, subtree2, ...] where subtree1 is a duplicate of subtree2 etc.

// Here's an example and some starter code:

// class Node:
//   def __init__(self, value, left=None, right=None):
//     self.value = value
//     self.left = left
//     self.right = right

//   def __repr__(self):
//     if self.left and self.right:
//       return f"({self.value}, {self.left}, {self.right})"
//     if self.left:
//       return f"({self.value}, {self.left})"
//     if self.right:
//       return f"({self.value}, None, {self.right})"
//     return f"({self.value})"

// def dup_trees(root):
//   # Fill this in.

// n3_1 = Node(3)
// n2_1 = Node(2, n3_1)
// n3_2 = Node(3)
// n2_2 = Node(2, n3_2)
// n1 = Node(1, n2_1, n2_2)
// # Looks like
// #     1
// #    / \
// #   2   2
// #  /   /
// # 3   3

// print(dup_trees(n1))
// # [[(3), (3)], [(2, (3)), (2, (3))]]
// # There are two duplicate trees
// #
// #     2
// #    /
// #   3
// # and just the leaf
// #
// # 3


// Upgrade to PRO for in-depth solutions with time-space complexity analysis.

// » Ready to fast-track your career? Join the premiere tech interview training program Tech Interview Pro.
// » For more, join me at CoderPro for 100+ whiteboard coding sessions: https://coderpro.com/

// Have a great day!
// Daily Interview Pro
// © 2022 Daily Interview Pro. All rights reserved.
// Did this email bother you? Unsubscribe anytime.

// max value
// sum of all items
// product of all values
