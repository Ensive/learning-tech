/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function reverseList(head: ListNode | null): ListNode | null {
  let node = head;
  if (!node || !node.next) return node; // based case

  let result = reverseList(node.next); // 1 -> 2 -> 3 -> 4 -> 5
  node.next.next = node; // 5-> 4, 4->3, 3-> 2, 2 -> 1
  node.next = null;

  return result;
}
