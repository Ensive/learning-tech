function walk(node) {
  if (node === null) {
    return [0, 0];
  }

  const [countLeft, sumLeft] = walk(node.left);
  const [countRight, sumRight] = walk(node.right);
  return [countLeft + countRight + 1, sumLeft + sumRight + node.value];
}

// homeworl: tail recursion + shared state

// tail recursion VS mutating
// optimization makes code less beautfiul ?

function solution(root) {
  const [count, sum] = walk(root, [0, 0]);
  return sum / count;
}

// 230
// 32.857142857142857
const tree2 = {
  value: 20,
  right: {
    value: 50,
    right: {
      value: 100,
      right: null,
      left: null,
    },
    left: {
      value: 30,
      right: null,
      left: null,
    },
  },
  left: {
    value: 10,
    right: {
      value: 15,
      right: null,
      left: null,
    },
    left: {
      value: 5,
      right: null,
      left: null,
    },
  },
};

assert(solution(tree2), 32.857142857142857);

function assert(actual, expected) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log('TEST PASSED');
    return 0;
  }

  console.log('\tTEST FAILED');
  console.log('\tactual :>> ', actual);
  console.log('\texpected :>> ', expected);
}

// function walk(node, tuple) {
//   if (node === null) {
//     return tuple;
//   }

//   tuple[0] += 1;
//   tuple[1] += node.value;

//   walk(node.left, tuple);
//   walk(node.right, tuple);

//   return tuple;
// }

// function solution(root) {
//   const [count, sum] = walk(root, [0, 0]);
//   return sum / count;
// }
