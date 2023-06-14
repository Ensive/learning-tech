var validPalindrome = function (s) {
  let left = 0;
  let right = s.length - 1;
  let mismatchCount = 0;

  while (left < right) {
    let leftChar = s[left];
    let rightChar = s[right];

    if (leftChar === rightChar) {
      left++;
      right--;
    } else {
      if (mismatchCount === 0) {
        mismatchCount++;
        if (s[left + 1] === rightChar) {
          left++;
        } else if (leftChar === s[right - 1]) {
          right--;
        } else {
          return false;
        }
      } else {
        return false;
      }
    }
  }

  return true;
};
