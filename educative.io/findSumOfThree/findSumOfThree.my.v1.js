export function findSumOfThree(nums, target) {
  const numsDesc = [...nums].sort((a, b) => a - b);
  const count = numsDesc.length;

  for (let i = 0; i < count; i++) {
      let low = i + 1;
      let high = count - 1;
      while (low < high) {
          const sumOfThree = numsDesc[i] + numsDesc[low] + numsDesc[high];

          if (sumOfThree === target) {
              return true;
          } else if (sumOfThree < target) {
              low++;
              continue;
          } else if (sumOfThree > target) {
              high--;
              continue;
          }
      }
  }

  return false;
}
