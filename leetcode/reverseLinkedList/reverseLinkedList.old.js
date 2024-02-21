/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  // we need to walk through the list
  // every iteration we have access to current value and to next value
  // we can go to the end, store values in array and then create a new list

  const list = [];
  let pointer = head;

  while (pointer) {
    list.push(pointer.val);
    pointer = pointer.next;
  }

  if (list.length === 0) {
    return head;
  }

  let i = list.length - 1;
  const newHead = new ListNode(list[i]);
  let newPointer = newHead;
  while (i > 0) {
    i--;
    newPointer.next = new ListNode(list[i]);
    newPointer = newPointer.next;
  }

  return newHead;
};
