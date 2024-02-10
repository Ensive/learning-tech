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
  let prev = null; // prev null
  let current = head;

  while (current) {
    let nextTemp = current.next; // save next node
    current.next = prev; // set next to prev
    prev = current; // save current as prev
    current = nextTemp; // point current to next
  }

  return prev;
}
