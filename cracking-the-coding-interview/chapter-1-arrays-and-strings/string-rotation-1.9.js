function isSubstring(s1, s2) {
  return s2.indexOf(s1) >= 0;
}

// 0. isSubstring
// 1. s1 s2
// 2. length - different => false
// 3. length - the same =>
// 4. s1 + s2 (tonantonan)
// *. isSubstring()

function isRotation(s1, s2) {
  if (s1.length !== s2.length || s1 === s2) {
    return false;
  }

  const s2Addition = s2 + s2;
  return isSubstring(s1.toLowerCase(), s2Addition.toLowerCase());
}

assert(isRotation('erbottlewat', 'waterbottle'), true);
assert(isRotation('anton', 'tonan'), true);
assert(isRotation('alex', 'lexa'), true);
assert(isRotation('Oleksii', 'siiolek'), true);
assert(isRotation('Oleksii', 'siioleks'), false);
assert(isRotation('hell', 'hell'), false);
assert(isRotation('shdsll', 'shdslsdasdq1l'), false);

function assert(actual, expected) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log('TEST PASSED!');
    return;
  }

  console.log('\tTEST FAILED!');
  console.log('\tactual :', actual);
  console.log('\texpected :', expected);
}
