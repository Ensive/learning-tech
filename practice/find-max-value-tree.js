class TreeNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

// shortest path then it's important to choose strategy

function walk(node, currentMaxValue = -Infinity) {
  if (node === null) {
    return currentMaxValue;
  }

  if (node.value > currentMaxValue) {
    currentMaxValue = node.value;
  }


  const leftMaxValue = walk(node.left, currentMaxValue);
  const rightMaxValue = walk(node.right, currentMaxValue);
  if (leftMaxValue > rightMaxValue) {
    return leftMaxValue;
  }

  return rightMaxValue;
}

function findMaxInTree(root) {
  return walk(root);
}

const tree = {
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
          right: {
              value: 45,
              right: null,
              left: null,
          },
          left: {
              value: 29,
              right: null,
              left: null,
          }
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
          right: {
              value: 7,
              right: null,
              left: null,
          },
          left: {
            value: 999,
            left: null,
            right: null
          },
      }
  }
};

function assert(actual, expected) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log('TEST PASSED');
    return 0;
  }

  console.log('\tTEST FAILED');
  console.log('\tactual :>> ', actual);
  console.log('\texpected :>> ', expected);
}

assert(findMaxInTree(tree), 999);
