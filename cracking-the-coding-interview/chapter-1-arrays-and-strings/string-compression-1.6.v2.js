// Questions:
// Do we treat uppercase and lower case differently?
// aabbcc => a2b2c2 ? (when length is equal)

// 1. input: string
// 2. only letters (a-z, A-Z) lowercase/uppercase
// 3. act
// 4. output:
// letters with numbers next to it (if shorter)
// original string if the "generated" string is longer

function compressString(string) {
  // TODO: what are edge cases?
  // * single letter
  // * two letters "aa".length == "a2".length
  // * non string type

  if (string.length === 1) {
    return string;
  }

  let result = '';
  let letterCount = 0;
  const strLength = string.length;
  for (let i = 0; i <= strLength; i += 1) {
    if (result === '') {
      result = string[i];
    } else if (result[result.length - 1] !== string[i]) {
      if (typeof string[i] === 'undefined') {
        result += letterCount;
      } else {
        result += (letterCount + string[i]);
      }

      letterCount = 0;
    }

    letterCount += 1;
  }

  // 1. temp store for letters = state
  // 2. when different letter comes in we count state
  // 3. put a number next to letter
  // 4. and store the result in = state

  return result;
}

assert(compressString('aabcccccaaa'), 'a2b1c5a3');
assert(compressString('toookkkUUUKKKppp'), 't1o3k3U3K3p3');
assert(compressString('a'), 'a');

function assert(actual, expected) {
  if (actual === expected) {
    console.log('TEST PASSED!');
    return;
  }

  console.log('\tTEST FAILED!');
  console.log('\tactual :', actual);
  console.log('\texpected :', expected);
}
