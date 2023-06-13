export function findSumOfThree(nums, target) {
  if (nums.length < 3) {
    return false;
  }

  const sortedNums = [...nums].sort((a, b) => a - b);
  const count = sortedNums.length;

  for (let i = 0; i < count - 2; i++) {
    let low = i + 1;
    let high = count - 1;

    // why removing equal is important ? - they shouldn't cross
    while (low < high) {
      const sumOfThree = sortedNums[i] + sortedNums[low] + sortedNums[high];

      if (sumOfThree === target) {
        return true;
      } else if (sumOfThree < target) {
        low++;
      } else {
        high--;
      }
    }
  }

  return false;
}
