function largestSumAfterKNegations(nums, k) {
  let opsCount = k;
  let sortedAscNums = nums.sort((a, b) => a - b); // asc
  let largestSum = 0;

  let index = 0;
  let min = sortedAscNums[index];
  while (min < 0 && opsCount > 0) {
    sortedAscNums[index] = -sortedAscNums[index];
    opsCount--;
    index += 1;
    min = sortedAscNums[index];
  }

  // no negatives anymore but remaining operations
  if (opsCount > 0 && opsCount % 2 !== 0) {
    const minIndex = index > 0 ? index - 1 : 0; // prev
    sortedAscNums[minIndex] = -sortedAscNums[minIndex];
  }

  // no remaining operations, but negatives still there (continue)
  const len = sortedAscNums.length;
  for (let i = 0; i < len; i++) {
    largestSum += sortedAscNums[i];
  }

  return largestSum;
}

largestSumAfterKNegations([-8, 3, -5, -3, -5, -2], 6);

assert(largestSumAfterKNegations([-8, 3, -5, -3, -5, -2], 6), 22);
assert(largestSumAfterKNegations([4, 2, 3], 1), 5);
assert(largestSumAfterKNegations([-2,5,0,2,-2], 3), 11);


function assert(actual, expected) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("TEST PASSED!");
    return;
  }

  console.log("\tTEST FAILED!");
  console.log("\tactual :", actual);
  console.log("\texpected :", expected);
}
