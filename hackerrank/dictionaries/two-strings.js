function twoStrings(s1, s2) {
  const symbols1 = s1.split('');

  for (let i = 0; i < symbols1.length; i++) {
    if (s2.includes(symbols1[i])) {
      return 'YES';
    }
  }

  return 'NO';
}

function assert(actual, expected) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log('TEST PASSED!');
    return;
  }

  console.log('\tTEST FAILED!');
  console.log('\tactual :', actual);
  console.log('\texpected :', expected);
}

assert(twoStrings('and', 'art'), 'YES');
assert(twoStrings('be', 'cat'), 'NO');
