function threeSum(nums) {
  nums.sort((a, b) => a - b);
  const result = new Set();
  const count = nums.length;

  for (let i = 0; i < count - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue; // Skip duplicate values of nums[i]
    }

    let left = i + 1;
    let right = count - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        result.add([nums[i], nums[left], nums[right]].toString());
        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return Array.from(result).map((triplet) => triplet.split(',').map(Number));
}
