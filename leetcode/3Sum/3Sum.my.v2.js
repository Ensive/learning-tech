function threeSum(nums) {
  const target = 0;
  const result = new Map();
  nums.sort((a, b) => a - b);

  const count = nums.length;
  for (let i = 0; i < count - 2; i++) {
    let low = i + 1;
    let high = count - 1;

    while (low < high) {
      const sum = nums[i] + nums[low] + nums[high];
      if (sum === target) {
        const triplet = [nums[i], nums[low], nums[high]];
        const tripletKey = triplet.toString();
        if (!result.has(tripletKey)) {
          result.set(tripletKey, triplet);
        }

        low++;
        high--;
      } else if (sum < target) {
        low++;
      } else {
        high--;
      }
    }
  }

  return Array.from(result.values());
}
