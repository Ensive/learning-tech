// wrong
// function repeatedString(s, n) {
//   let iteration = 0;
//   let aCount = 0;

//   let fullString = '';
//   while (iteration < n) {
//     for (let k = 0; k < s.length; k++) {
//       if (iteration === n) return aCount;
//       if (s[k] === 'a') aCount++;
//       iteration++;
//     }
//   }

//   console.log('fullString :>> ', fullString);
//   return aCount;
// }

// correct and simple and efficient
function repeatedString(s, n) {
  // we count how many times full string fits N chars
  // string - we can count how many a's in the string
  // we get the remained chars and count a's in the remained string
  // we multiply "a" count in one string by times the string fit N chars + count a' in remained chars
  // edge cases if n < s length, then we just loop through the string N times
  let aTotal = 0; // count a in one string

  let aCountInS = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'a') aCountInS++;
  }

  // get aTotal
  const fullStringsCountInN = Math.floor(n / s.length);
  aTotal = fullStringsCountInN * aCountInS; // check if there is a remained string and add it to the total
  const remainder = n % s.length;
  if (remainder > 0) {
    for (let i = 0; i < remainder; i++) {
      if (s[i] === 'a') aTotal++;
    }
  }

  return aTotal;
}

// wrong
// function repeatedString2(s, n) {
//   let aCount = 0;
//   let k = 0;

//   for (let i = 0; i < n; i++) {
//     if (k === s.length) k = 0;
//     if (s[k] === 'a') {
//       aCount++;
//     }

//     k++;
//   }

//   return aCount;
// }

assert(repeatedString('aba', 10), 7);
assert(repeatedString('aba', 10), 7);
assert(repeatedString('a', 1000000000000), 1000000000000);

function assert(actual, expected) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log('TEST PASSED!');
    return;
  }

  console.log('\tTEST FAILED!');
  console.log('\tactual :', actual);
  console.log('\texpected :', expected);
}
