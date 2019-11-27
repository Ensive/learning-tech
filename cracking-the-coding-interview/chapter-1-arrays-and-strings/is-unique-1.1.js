function isUnique(str) {
  let result = true;
  let lettersCount = {};
  
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (lettersCount[char]) {
      lettersCount[char]++;
    } else {
      lettersCount[char] = 1;
    }
  }

  const countValues = Object.values(lettersCount);
  for (let i = 0; i < countValues.length; i++) {
    if (countValues[i] !== 1) {
      return false;
    }
  }

  return result;
}

assert(isUnique('qwertyuiop'), true);
assert(isUnique('qazxswedcvfrtgbnhyujm'), true);
assert(isUnique('qq'), false);
assert(isUnique('fasgyudsagdjhsaghjqwvcsxzctywqeghjabvdfgdgjhsagj'), false);
assert(isUnique('ewyhfhnxnvxgyjqwbxzuisaoashasfgyer'), false);
assert(isUnique('sdhghshgdhs21312hg3bdsah1j34gh12321'), false);

function assert(actual, expected) {
  if (actual === expected) {
    console.log('TEST PASSED!');
    return;
  }

  console.log('\tTEST FAILED!');
  console.log('\tactual :', actual);
  console.log('\texpected :', expected);
}
