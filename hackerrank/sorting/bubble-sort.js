function countSwaps(a) {
  let swapCount = 0;
  const arrLength = a.length;

  for (let i = 0; i < arrLength; i++) {
    for (let j = 0; j < arrLength - 1; j++) {
      // Swap adjacent elements if they are in decreasing order
      if (a[j] > a[j + 1]) {
        let temp = a[j + 1];
        a[j + 1] = a[j];
        a[j] = temp;
        swapCount++;
      }
    }
  }

  const result = `
  Array is sorted in ${swapCount} swaps.
  First Element: ${a[0]}
  Last Element: ${a[arrLength - 1]}
  `;

  console.log(result);
  return result;
}

assert(
  countSwaps([3, 2, 1]),
  `
    Array is sorted in 3 swaps.
    First Element: 1
    Last Element: 3
  `
);

assert(
  countSwaps([1, 2, 3]),
  `
    Array is sorted in 0 swaps.
    First Element: 1
    Last Element: 3
  `
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
