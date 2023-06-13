export function findSumOfThree(nums, target) {
  const count = nums.length;

  // Check if there are enough elements in nums
  if (count < 3) {
    return false;
  }

  const seen = new Set();

  for (let i = 0; i < count - 2; i++) {
    const complement = target - nums[i];

    for (let j = i + 1; j < count; j++) {
      const current = nums[j];
      const remaining = complement - current;

      if (seen.has(remaining)) {
        return true;
      }

      seen.add(current);
    }
  }

  return false;
}
