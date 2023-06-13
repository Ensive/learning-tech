export function isPalindrome(s) {
  if (!s || typeof s !== 'string') {
    return false;
  }

  s = s.toLowerCase();
  const count = s.length;
  let left = 0;
  let right = count - 1;

  while (left <= right) {
    const leftChar = s[left];
    const rightChar = s[right];

    if (leftChar !== rightChar) {
      return false;
    }

    if (!isAlphanumeric(leftChar)) {
      left++;
      continue;
    }

    if (!isAlphanumeric(rightChar)) {
      right++;
      continue;
    }

    left++;
    right--;
  }

  return true;
}

function isAlphanumeric(char) {
  return /^[a-z0-9]$/i.test(char);
}

// kayak

// k k
// a a
