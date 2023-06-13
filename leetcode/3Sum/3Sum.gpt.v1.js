function threeSum(nums) {
  const target = 0;
  const result = new Set();
  nums.sort((a, b) => a - b);

  const count = nums.length;
  for (let i = 0; i < count - 2; i++) {
      if (i > 0 && nums[i] === nums[i - 1]) {
          continue; // Skip duplicate values of i
      }

      let low = i + 1;
      let high = count - 1;

      while (low < high) {
          const sum = nums[i] + nums[low] + nums[high];
          if (sum === target) {
              result.add([nums[i], nums[low], nums[high]].toString());
              low++;
              high--;
          } else if (sum < target) {
              low++;
          } else {
              high--;
          }
      }
  }

  return Array.from(result, triplet => triplet.split(',').map(Number));
}
