function createTestArray() {
  let arr = [];
  for (let i = 0; i < 100000; i++) {
    let number = Math.floor(-Math.random() * (1000000000 - 1) + 1);
    if (Math.random() > 0.5) {
      number = Math.abs(number);
    }

    arr[i] = number;
  }

  arr[100001] = 1000000000;
  arr[100002] = 1000000000;

  return arr;
}

const testArray = createTestArray();

function minimumAbsoluteDifference(arr) {
  let result = undefined;

  // TODO: quick sort
  arr.sort((a, b) => a - b); // log n

  let operations = 0;
  console.time('test');

  // n
  for (let i = 0; i < arr.length - 1; i++) {
    const diff = Math.abs(arr[i] - arr[i + 1]);
    if (typeof result === 'undefined' || result > diff) {
      result = diff;
    }
    operations++;

    // for (let k = i + 1; k < arr.length; k++) {
    //   const diff = Math.abs(arr[i] - arr[k]);
    //   if (typeof result === 'undefined' || result > diff) {
    //     result = diff;
    //   }
    //   operations++;
    // }
  }

  console.log('operations :>> ', operations + 1);
  console.timeEnd('test');
  return result;
}

// compare the most closest numbers on X asis

// complexity ???
// O(n * log n)
// O(n!)

assert(minimumAbsoluteDifference(testArray), 0);
assert(minimumAbsoluteDifference([3, -7, 0]), 3);
assert(
  minimumAbsoluteDifference([-59, -36, -13, 1, -53, -92, -2, -96, -54, 75]),
  1
);

// [-96, -92, -59, -54, -53, -36, -13, -2, 1, 75];

// - 0 +
// - -> 0  <- +
//
assert(minimumAbsoluteDifference([1, -3, 71, 68, 17]), 3);

// 68 71
// 71 - 68 = 3

function assert(actual, expected) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log('TEST PASSED!');
    return;
  }

  console.log('\tTEST FAILED!');
  console.log('\tactual :', actual);
  console.log('\texpected :', expected);
}
