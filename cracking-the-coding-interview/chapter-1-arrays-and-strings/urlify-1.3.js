function urlify(string) {
  const stringWithoutSpaces = string.trim();
  return stringWithoutSpaces.replace(new RegExp(/\s/gi), '%20');
}

assert(urlify('Mr John Smith ', 13), 'Mr%20John%20Smith');

function assert(actual, expected) {
  if (actual === expected) {
    console.log('TEST PASSED!');
    return;
  }

  console.log('\tTEST FAILED!');
  console.log('\tactual :', actual);
  console.log('\texpected :', expected);
}
