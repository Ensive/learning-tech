import Node from './linked-list.js';
import assert from './assert.js';

const ll = {
  next: {
    next: {
      next: {
        next: {
          next: {
            next: {
              next: {
                next: {
                  next: {
                    next: {
                      next: null,
                      value: 7
                    },
                    value: 7
                  },
                  value: 6
                },
                value: 6
              },
              value: 5
            },
            value: 5
          },
          value: 4
        },
        value: 4
      },
      value: 3
    },
    value: 2
  },
  value: 1
};

export default function returnKthToLast(k, node) {
  let result = null;
  let count = 1;

  while (node.next !== null) {
    if (count === k) result = new Node(node.value);
    if (count > k) result.appendToTail(node.value);

    node = node.next;
    count++;
  }

  return result ? result.appendToTail(node.value) : null;
}

assert(returnKthToLast(8, ll), {
  next: {
    next: {
      next: {
        next: null,
        value: 7
      },
      value: 7
    },
    value: 6
  },
  value: 6
});
