// replaced (the same length)
// removed (different length) -1
// inserted (different length) +1

// given input
// pale, ple

// 1. make array from strings
// 2. compare length?
// 3. if different => one algorithm
//    we also sort
//    when we see the difference we try to continue from next char, if there will be one more difference than false
// 4. if equal => other algorithm (sorting and comparison of chars, if more than one diff return false)

function isOneEditAway(str1, str2) {
  let result = true;

  // const chars1 = str1.split('').sort();
  // const chars2 = str2.split('').sort();
  // we do not need to sort actually

  // 'pale', 'bale'
  let editsCount = 0;
  if (str1.length == str2.length) {
    for (let i = 0; i < str1.length; i++) {
      if (str1[i] !== str2[i]) editsCount++;
    }
  } else {
    const length = Math.max(str1.length, str2.length);
    const isStr1Longer = str1.length > str2.length;

    if (isStr1Longer && str1.length - str2.length > 1) {
      return false;
    }

    if (!isStr1Longer && str2.length - str1.length > 1) {
      return false;
    }

    // 'pales', 'pale'
    // 'pale', 'ple'
    let goToNext = false;
    for (let i = 0; i < length; i++) {
      if (goToNext) {
        if (isStr1Longer) {
          if (str1[i] !== str2[i - 1]) editsCount++;
        } else {
          if (str1[i - 1] !== str2[i]) editsCount++;
        }
      } else {
        if (
          (typeof str1[i] === 'undefined' || typeof str2[i] === 'undefined') &&
          editsCount === 0
        ) {
          return true;
        }

        if (
          (typeof str1[i] === 'undefined' || typeof str2[i] === 'undefined') &&
          editsCount > 0
        ) {
          return false;
        }

        // 'a' 'l'
        if (str1[i] !== str2[i]) goToNext = true;
      }
    }
  }

  return editsCount <= 1;
}

assert(isOneEditAway('pale', 'ple'), true);
assert(isOneEditAway('ple', 'pale'), true);

assert(isOneEditAway('pales', 'pale'), true);
assert(isOneEditAway('pale', 'pales'), true);

assert(isOneEditAway('pale', 'bale'), true);
assert(isOneEditAway('bale', 'pale'), true);

assert(isOneEditAway('pale', 'bake'), false);

assert(isOneEditAway('qqqqqqqqqqqqqqqqqqqq', 'q'), false);

function assert(actual, expected) {
  if (actual === expected) {
    console.log('TEST PASSED!');
    return;
  }

  console.log('\tTEST FAILED!');
  console.log('\tactual :', actual);
  console.log('\texpected :', expected);
}
