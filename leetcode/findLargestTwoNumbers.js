function findLargestTwoNumbers(numbers) {
  if (numbers.length < 2) {
    throw new Error('Input array must have at least two numbers');
  }

  let largest = -Infinity;
  let secondLargest = -Infinity;

  const numberCount = numbers.length;
  for (let i = 0; i < numberCount; i++) {
    if (largest < numbers[i]) {
      secondLargest = largest;
      largest = numbers[i];
    } else if (secondLargest < numbers[i]) {
      secondLargest = numbers[i];
    }
  }

  return [largest, secondLargest];
}

const nums = [-1, -6, 7, 0, 2, -3, 9, -8, 8, 1, 0, 5, -2];

function assert(actual, expected) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log('TEST PASSED');
  } else {
    console.log('\tTEST FAILED');
    console.log('Actual:', JSON.stringify(actual));
    console.log('Expected:', JSON.stringify(expected));
  }
}

assert(findLargestTwoNumbers(nums), [9, 8]);
assert(findLargestTwoNumbers(nums.concat(158, 9999)), [9999, 158]);
