var assert = require('assert');

/**
 * @param {number} numRows
 * @return {number[][]}
 */

var helper = function (currentRow, numRows, triangle) {
  if (currentRow > numRows) {
    return triangle;
  }

  if (currentRow === 1) {
    triangle.push([1]);
    return helper(2, numRows, triangle);
  }

  if (currentRow === 2) {
    triangle.push([1, 1]);
    return helper(3, numRows, triangle);
  }

  let newRow = [];
  let prevRow = triangle[currentRow - 2];
  for (let i = 0; i <= prevRow.length; i++) {
    newRow[i] =
      (prevRow[i - 1] === undefined ? 0 : prevRow[i - 1]) +
      (prevRow[i] === undefined ? 0 : prevRow[i]);
  }

  currentRow += 1;
  triangle.push(newRow);
  return helper(currentRow, numRows, triangle);
};

var generate = function (numRows) {
  return helper(1, numRows, []);

  // if 1 return [1]

  // iterate as many times as numRows, building an array
  // 1 => [1]
  // 2 => [0 + 1, 1 + 0]
  // 3 => [0 + 1, 1 + 1, 1 + 0]
  // 4 => [0 + 1, 1 + 2, 2 + 1, 1 + 0]
  // 5 => [0 + 1, 1 + 3, 3 + 3, 3 + 1, 1 + 0]
  // 6 => [0 + 1, 1 + 4, 4 + 6, 6 + 4, 4 + 1, 1 + 0]
  // 7 => [0 + 1, 1 + 5, 5 + 10, 10 + 5, 5 + 1, 1 + 0]

  // iterate
  // edge case, 1 and 2
  // 0 + 1 = 1
  // 1 + 1 = 2,
};

assert(generate(5), [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]]);
