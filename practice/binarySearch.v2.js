/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0; // 3, 1
  let right = nums.length - 1; // 6, right: 3

  while (left <= right) {
    let middle = Math.floor((right + left) / 2); // 3, 4, 1

    if (nums[middle] > target) {
      right = middle - 1; // 3, 2
    } else if (nums[middle] < target) {
      left = middle + 1; // 3, 1
    } else if (nums[middle] === target) {
      return middle;
    }
  }

  return -1;
};

// [-1,0,3,5,9,12] 2
