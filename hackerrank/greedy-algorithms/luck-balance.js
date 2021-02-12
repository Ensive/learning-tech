

function luckBalance(k, contests) {
  // k = the max number of important contests Lena allowed to loose
  // contests [luckValue, isImportant]

  // TODO:
  let result = 0;

  // do we need to sort by importance ?? - NO
  // do we need to sort by luckValue ?? -> 1 time iteration
  // max => min

  // for loop (i)
  // luckBalance + max items until we reach k
  // importantContestsLost vs K
  // - luck Balance if contests are important OR + luck Balance if contests unimportant)

  contests.sort((a, b) => b[0] - a[0]);
  console.log('contests :>> ', contests);
  const counter = contests.length;
  let importantContestsLost = 0;

  for (let i = 0; i < counter; i++) {
    const isImportant = contests[i][1] >= 1;
    if (isImportant && importantContestsLost < k) {
      result += contests[i][0];
      importantContestsLost++;
    } else if (isImportant && importantContestsLost === k) {
      result -= contests[i][0];
    } else if (contests[i][1] === 0) {
      result += contests[i][0];
    }
  }

  // return max luckBalance achievable
  return result;
}

// complexity n log n
// complexity n complexity (without sorting)

assert(
  luckBalance(3, [
    [5, 1],
    [2, 1],
    [1, 1],
    [8, 1],
    [10, 0],
    [5, 0]
  ]),
  29
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
