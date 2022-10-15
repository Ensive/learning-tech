// const testInput = [2, 3, 7, 5, 6, 6, 6, 0, 1, 1, 20, 3];
const testInput = [9, 2, 4]; // i 0
// 2, 9, 4 i = 1
// 2, 4, 9

function bubbleSort(unsortedArray) {
  // iterate through array until we have one current element greater than next element
  // we swap
  // we iterate on the array for one element less until 1 element left

  for (let i = 0; i < unsortedArray.length; ++i) {
    for (let j = 0; j < unsortedArray.length - i - 1; j++) {
      if (unsortedArray[j] > unsortedArray[j + 1]) {
        const tmp = unsortedArray[j + 1];
        unsortedArray[j + 1] = unsortedArray[j];
        unsortedArray[j] = tmp;
      }
    }
  }

  return unsortedArray;
}

assert(bubbleSort([9, 2, 2, 0, 4]), [0, 2, 2, 4, 9]);
assert(bubbleSort([234, 43, 55, 63,  5, 6, 235, 547]), [5, 6, 43, 55, 63, 234, 235, 547]);

function assert(actual, expected) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log('Test passed');
    return 0;
  }

  console.log('\tTest failed');
  console.log(`\tActual: ${actual}; Expected: ${expected}`);

  return 1;
}
