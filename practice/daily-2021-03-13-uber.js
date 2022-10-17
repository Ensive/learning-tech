// Hi, here's your problem today. This problem was recently asked by Uber:

// Given a linked list of integers, remove all consecutive nodes that sum up to 0.

// Example:
// Input: 10 -> 5 -> -3 -> -3 -> 1 -> 4 -> -4
// Output: 10

// input is a singly linked list node (head)
// values are integers
// we need to traverse the list from head to tail

// we create an array out from list ?
// we need to cache the sum of last nodes that is not 0 e.g. 5 - 3 - 3 = -1,
// once we the sum hits 0 we need to remove all the nodes that formed that sum

// brutal force: generating new list ? based on array?
// what if we traverse and form a hashmap that will tell us what to delete?

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

function removeConsecutiveSumTo0(node) {
  let arr = []; // let's use it as a queue ? no let's use it as a dynamic array

  while (node) {
    if (node.value + node.next.value === 0) {
      // delete those nodes
    } else {
      arr.push(node.value);
    }

    node = node.next;
  }
}

// test case
let node = new Node(10);
node.next = new Node(5);
node.next.next = new Node(-3);
node.next.next.next = new Node(-3);
node.next.next.next.next = new Node(1);
node.next.next.next.next.next = new Node(4);
node.next.next.next.next.next.next = new Node(-4);
node = removeConsecutiveSumTo0(node);

// assert(node.value, 10);
// assert(node.next, null);

function assert(actual, expected) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log('TEST PASSED');
    return 0;
  }

  console.log('\tTEST FAILED');
  console.log('\tactual :>> ', actual);
  console.log('\texpected :>> ', expected);
  return 1;
}
