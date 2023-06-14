var removeElement = function (nums, val) {
  let k = 0; // Keeps track of the number of elements not equal to val

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i]; // Move the element to the front of the array
      k++; // Increment k for each element not equal to val
    }
  }

  return k;
};
