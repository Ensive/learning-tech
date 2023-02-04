// 2, 4, 8, 16, 32, 64, 128
// 5

// function divide(number) {
//   if (number === 1) {
//     return true;
//   }
// }

function isPowerOfTwo(number) {
  if (number === 1) {
    return true;
  }

  if (number % 2 !== 0) {
    return false;
  }

  return isPowerOfTwo(number / 2);

  // 4 % 2 = 0;
  // 2 % 2 = 0;
  // 1

  // 18 % 2 = 0;
  // 9 % 2 = 1;

  // base case
  // 1 = true

  // recursion
  // pre
  // recurse
}

assert(isPowerOfTwo(8), true);
assert(isPowerOfTwo(10), false);
assert(isPowerOfTwo(1000), false);
assert(isPowerOfTwo(1024), true);

function assert(actual, expected) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log('TEST PASSED');
    return 0;
  }

  console.log('\tTEST FAILED');
  console.log('\tactual :>> ', actual);
  console.log('\texpected :>> ', expected);
}
