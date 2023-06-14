/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

// [0,1,2,2,3,0,4,2]
//  [
//   0, 0, 1, 2, 2, 2, 3, 4
// ]
// 2

// [3,2,2,3] => 2, 2, 3, 3
var removeElement = function (nums, val) {
  nums.sort((a, b) => a - b);

  let k = 0;
  const count = nums.length;
  let end = count - 1;

  if (nums[end] === val) {
    while (nums[end] === val) {
      nums[end] = null;
      end--;
      k++;
    }

    return k;
  }

  for (let i = 0; i < count; i++) {
    while (nums[i] === val) {
      nums[i] === nums[end];
      end--;
      k++;
      i++;
    }
  }

  return k;
};
