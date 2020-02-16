// notes
// Unlike an array, a linked list does not provide constant time access to a particular "index" within the list
// The benefit of a linked list is that you can add and remove items from the beginning of the list in constant time.

const node = {
  next: null,
  data: 1
};

// [] appendToTail(1)
// [] appendToTail(5)
// [] appendToTail(7)
const list = [
  // end, n, n.next = end
  {
    value: 1,
    next: 5 // 5
  },

  // end, n
  {
    value: 5,
    next: null
  },

  // end
  {
    value: 7
  }
];

const linkedList = [
  {
    value: 1,
    next: 5
  },
  {
    value: 5,
    next: 2
  },
  {
    value: 2,
    next: 13
  },
  {
    value: 13,
    next: 7
  },
  {
    value: 7,
    next: 3
  },
  {
    value: 3,
    next: null
  }
];

console.log('linkedList[0].value :', linkedList[0].value);

// search for 13

const doublyLinkedList = [
  {
    prev: null,
    value: 1,
    next: 5
  },
  {
    prev: 1,
    value: 5,
    next: 2
  },
  {
    prev: 5,
    value: 2,
    next: 13
  },
  {
    prev: 2,
    value: 13,
    next: 7
  },
  {
    prev: 13,
    value: 7,
    next: 3
  },
  {
    prev: 7,
    value: 3,
    next: null
  }
];
