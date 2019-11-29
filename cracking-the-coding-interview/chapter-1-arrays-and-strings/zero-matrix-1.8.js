// matrix as two-dimensional array
// if we check zero => we set the entire row (current array numbers to 0)
// and all elements with that index in other arrays to zero
// we store initial state of the array and create a new one

// give N x M matrix
// setColumnRowToZero
function zeroMatrix(matrix) {
  // caching the coordinates of zero (rows and columns we set to 0)

  let newMatrix = JSON.parse(JSON.stringify(matrix));
  const rowsCount = matrix.length;
  const columnsCount = matrix[0].length;

  // O(1) = 1
  // O(n), n = arr.length
  // O((n * m * (n + m)))

  for (let row = 0; row < rowsCount; row++) {
    for (let column = 0; column < columnsCount; column++) {
      const item = matrix[row][column];

      if (item === 0) {
        for (let i = 0; i < columnsCount; i++) {
          newMatrix[row][i] = 0;
        }

        for (let i = 0; i < rowsCount; i++) {
          newMatrix[i][column] = 0;
        }
      }
    }
  }

  return newMatrix;
}

// how can we improve?
function zeroMatrixV2() {}

assert(
  zeroMatrix([
    [1, 2, 3, 4],
    [3, 0, 9, 5],
    [0, 6, 10, 0]
  ]),
  [
    [0, 0, 3, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ]
);

assert(
  zeroMatrix([
    [0, 3],
    [4, 2]
  ]),
  [
    [0, 0],
    [0, 2]
  ]
);

function assert(actual, expected) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log('TEST PASSED!');
    return;
  }

  console.log('\tTEST FAILED!');
  console.log('\tactual :', actual);
  console.log('\texpected :', expected);
}
