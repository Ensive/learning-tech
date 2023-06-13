function threeSum(nums) {
  const target = 0;
  const result = [];
  nums.sort((a, b) => a - b);

  const count = nums.length;
  for (let i = 0; i < count - 2; i++) {
      let low = i + 1;
      let high = count - 1;

      while (low < high) {
          const sum = nums[i] + nums[low] + nums[high];
          if (sum === target) {
              result.push([nums[i], nums[low], nums[high]]);
          } else if (sum < target) {
              low++
          } else {
              high--;
          }
      }
  }

  return result;
};
