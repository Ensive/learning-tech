function threeSum(nums) {
  const target = 0;
  const result = [];
  nums.sort((a, b) => a - b);

  const count = nums.length;
  for (let i = 0; i < count - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue; // Skip duplicate values of nums[i]
    }

    let left = i + 1;
    let right = count - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum === target) {
        result.push([nums[i], nums[left], nums[right]]);

        // Skip duplicate values of nums[left] and nums[right]
        while (left < right && nums[left] === nums[left + 1]) {
          left++;
        }
        while (left < right && nums[right] === nums[right - 1]) {
          right--;
        }

        left++;
        right--;
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  }

  return result;
}
