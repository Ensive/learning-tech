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

function deleteNode(head, d) {
  let node = head;

  if (node.value === d) {
    return node.next;
  }

  while (node.next !== null) {
    if (node.next.value === d) {
      node.next = node.next.next;
      return node;
    }

    node = node.next;
  }

  return node;
}

function removeDuplicates(node) {
  const values = [];
  let head = JSON.parse(JSON.stringify(node));
  let prev = undefined;

  while (node.next !== null) {
    prev = node;
    if (values.indexOf(node.value) === -1) {
      values.push(node.value);
      node = node.next;
    } else {
      deleteNode(head, node.value);
      node = node.next;
    }
  }

  console.log('prev :', prev);
  if (node.next === null && prev.value === node.value) {
    deleteNode(head, node.value);
  }

  return head;
}

// console.log(
//   'deleteNode(7, ll) :',
//   deleteNode(
//     {
//       value: 4,
//       next: {
//         value: 7,
//         next: {
//           value: 3,
//           next: null
//         }
//       }
//     },
//     7
//   )
// );

assert(removeDuplicates(ll), {
  next: {
    next: {
      next: {
        next: {
          next: {
            next: {
              next: null,
              value: 7
            },
            value: 6
          },
          value: 5
        },
        value: 4
      },
      value: 3
    },
    value: 2
  },
  value: 1
});

function assert(actual, expected) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log('TEST PASSED!');
    return;
  }

  console.log('\tTEST FAILED!');
  console.log('\tactual :', actual);
  console.log('\texpected :', expected);
}
