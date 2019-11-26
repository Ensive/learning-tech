// string = N chars
// 1 000 000
function isPalindromPermutation(string) {
  const curry = f => x => y => f(x, y);
  const modulo = curry((x, y) => y % 2);
  const isOdd = modulo(2);

  const charPairs = {};
  let charsCount = 0;
  const charsArray = string.replace(new RegExp(/\s/gi), '').toLowerCase().split('');

  for (let i = 0; i < charsArray.length; i++) {
    charsCount++;
    if (charPairs[charsArray[i]]) {
      charPairs[charsArray[i]]++;
    } else {
      charPairs[charsArray[i]] = 1;
    }
  }

  const keys = Object.keys(charPairs);

  let result = false;
  const odds = [];
  const even = [];
  for (let i = 0; i < keys.length; i++) {
    // console.log('charPairs[keys[i]] :', charPairs[keys[i]]);
    if (isOdd(charPairs[keys[i]])) {
      odds.push(charPairs[keys[i]]);
    };

    if (!isOdd(charPairs[keys[i]])) {
      even.push(charPairs[keys[i]]);
    }
  }

  // console.log('odds :', odds);
  // console.log('even :', even);

  // console.log('charsCount :', charsCount);
  // console.log('charPairs :', charPairs);

  if (!isOdd(charsArray.length) && odds.length === 0) {
    result = true;
  }

  if (isOdd(charsArray.length) && odds.length === 1) {
    result = true;
  }

  return result;
}

// Hints:#106,#121,#134,#136

assert(isPalindromPermutation('Tact Coa'), true);

assert(isPalindromPermutation('civil'), false);
assert(isPalindromPermutation('livci'), false);
assert(isPalindromPermutation('civic'), true);
assert(isPalindromPermutation('ivicc'), true);

function assert(actual, expected) {
  if (actual === expected) {
    console.log('TEST PASSED!');
    return;
  }

  console.log('\tTEST FAILED!');
  console.log('\tactual :', actual);
  console.log('\texpected :', expected);
}
