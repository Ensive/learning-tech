import Node from './linked-list';
import assert from './assert';

const example = {
  value: 4,
  next: {
    value: 3,
    next: {
      value: 2,
      next: null
    }
  }
};

function partion(head, x) {
  let result = null;

  // 1. comparing head.value
  // head.value === x => next
  // head.value < x => next
  // head.value > x =>
  // head = head.next
  //

  while (head.next !== null) {
    const slowPointer = head.next;
    const fastPointer = head.next.next;

    // deleted next
    const cloneNode = JSON.parse(JSON.stringify(head));
    cloneNode.next = cloneNode.next.next;

    head = head.next;
    // head.next = cloneNode;
    // console.log(head);
  }

  return head;
}

partion(example, 3);

// assert(
//   partion(
//     {
//       value: 3,
//       next: {
//         value: 5,
//         next: {
//           value: 8,
//           next: {
//             value: 5,
//             next: {
//               value: 10,
//               next: {
//                 value: 2,
//                 next: {
//                   value: 1,
//                   next: null
//                 }
//               }
//             }
//           }
//         }
//       }
//     },
//     5
//   ),
//   {
//     value: 3,
//     next: {
//       value: 1,
//       next: {
//         value: 2,
//         next: {
//           value: 5,
//           next: {
//             value: 5,
//             next: {
//               value: 10,
//               next: {
//                 value: 8,
//                 next: null
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// );
