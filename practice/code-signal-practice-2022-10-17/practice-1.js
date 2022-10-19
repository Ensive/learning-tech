function solution(numbers, left, right) {
  // we need to create result array and fill it based on algorithm
  // we should iterate through numbers array and do our checks O(n) time and space complexity
      // we check x === numbers[i] / (i + 1)
      // x >= left
      // x <= right

  // return result

  let result = [];

  // [8, 5, 6, 16, 5]
  for (let i = 0; i < numbers.length; i++) {
      const x = numbers[i] / (i + 1);

      if (x >= left && x <= right && Number.isInteger(x)) {
          result[i] = true;
      } else {
          result[i] = false;
      }
  }

  return result;
}
