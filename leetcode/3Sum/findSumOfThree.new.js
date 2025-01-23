export function findSumOfThree(nums, target) {
  // nums are array of integers
  // target is integer
  // if we sort then
  nums = nums.sort((a, b) => a - b); // sorting

  for (let i = 0; i < nums.length; i++) {
    let curr = nums[i];
    let low = i + 1;
    let high = nums.length - 1;

    while (low < high) {
      let sum = curr + nums[low] + nums[high];

      if (sum === target) {
        return true;
      }

      if (sum < target) {
        low++;
      }

      if (sum > target) {
        high--;
      }
    }
  }

  return false;
}
