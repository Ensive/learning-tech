var moveZeroes = function (nums) {
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      result.push(0);
    } else {
      result.unshift(nums[i]);
    }
  }

  console.log("result", result);
  return result;
};

const output = moveZeroes([0, 1, 0, 3, 12]);

console.log("output :>> ", output);
