const assert = require('assert');

function isPalindrome(s) {
  s = s.toLowerCase().replace(/[^a-z0-9]/gi, '');

  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    if (s[left] !== s[right]) return false;

    left++;
    right--;
  }

  return true;
}

assert(isPalindrome('alla') === true);
assert(isPalindrome('race car') === true);
assert(isPalindrome('madam') === true);
assert(isPalindrome(' ') === true);
assert(isPalindrome('race a car') === false);
assert(isPalindrome('anton') === false);
assert(isPalindrome('A man, a plan, a canal: Panama') === true);
