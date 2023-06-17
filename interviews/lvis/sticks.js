function minSticks(sticks, K) {
  const dp = new Array(K + 1).fill(Infinity);
  dp[0] = 0;

  for (let length = 1; length <= K; length++) {
    for (const stick of sticks) {
      if (length >= stick) {
        const remainingLength = length - stick;
        dp[length] = Math.min(dp[length], dp[remainingLength] + 1);
      }
    }
  }

  return dp[K] !== Infinity ? dp[K] : -1;
}

// Example usage:
const sticks = [2, 3, 5];
const targetLength = 9;
const minSticksRequired = minSticks(sticks, targetLength);
console.log(
  `The minimum number of sticks required to form ${targetLength} is ${minSticksRequired}`,
);
