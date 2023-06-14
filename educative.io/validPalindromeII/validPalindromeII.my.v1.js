function validPalindrome(s) {
  let left = 0;
  let right = s.length - 1;
  let mismatchCount = 0;

  while (left <= right) {
    const leftChar = s[left];
    const rightChar = s[right];

    if (leftChar === rightChar) {
      left++;
      right--;
    } else {
      if (mismatchCount === 0) {
        left++;
        mismatchCount++;
      } else if (mismatchCount === 1) {
        mismatchCount++;
        left--;
        right--;
      } else {
        return false;
      }
    }
  }

  return true;
}

// axb cba ba => c !== a => b === b  => c === c
//
