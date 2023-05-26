const assert = require('assert');

function isPalindrome(s) {
  if (s.length === 1) return true;

  let result = true;
  const middle = Math.floor(s.length / 2);
  s = s.toLowerCase().replace(/[^a-z0-9]/gi, '');
  for (let i = 0, k = s.length - 1; i < middle; i += 1, k -= 1) {
    if (s[k] !== s[i]) return false;
  }

  return result;
}

assert(isPalindrome('alla') === true);
assert(isPalindrome('race car') === true);
assert(isPalindrome('madam') === true);
assert(isPalindrome(' ') === true);
assert(isPalindrome('race a car') === false);
assert(isPalindrome('anton') === false);
assert(isPalindrome('A man, a plan, a canal: Panama') === true);
