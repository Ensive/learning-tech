var isValid = function (s) {
  if (typeof s !== 'string') return false;

  const stack = [];
  const openingBrackets = ['(', '{', '['];
  const closingBrackets = [')', '}', ']'];
  const closingBracketsMap = {
    '{': '}',
    '[': ']',
    '(': ')',
  };

  const sLength = s.length;
  for (let i = 0; i < sLength; i++) {
    if (openingBrackets.includes(s[i])) {
      stack.push(s[i]);
    } else {
      const prevBracket = stack.pop();
      if (closingBracketsMap[prevBracket] !== s[i]) return false;
    }
  }

  return stack.length === 0;
};
