function isPermutationPossible(string1, string2) {
  if (
    typeof string1 !== 'string' ||
    typeof string2 !== 'string' ||
    string1.length !== string2.length
  )
    return false;

  const string1Length = string1.length;
  // TODO: possible optimization is using MAP instead of objects
  const charactersCountString1 = {};
  const charactersCountString2 = {};

  for (let charIndex = 0; charIndex < string1Length; charIndex += 1) {
    const charFromString1 = string1[charIndex];
    const charFromString2 = string2[charIndex];

    if (charactersCountString1[charFromString1]) {
      charactersCountString1[charFromString1] += 1;
    } else {
      charactersCountString1[charFromString1] = 1;
    }

    if (charactersCountString2[charFromString2]) {
      charactersCountString2[charFromString2] += 1;
    } else {
      charactersCountString2[charFromString2] = 1;
    }
  }

  const allCharactersString1 = Object.keys(charactersCountString1);
  const totalCharactersCount = allCharactersString1.length;

  for (let i = 0; i < totalCharactersCount; i += 1) {
    const char = allCharactersString1[i];

    if (charactersCountString1[char] !== charactersCountString2[char]) {
      return false;
    }

    // console.log('charactersCountString1[char] :', charactersCountString1[char]);
  }

  // input: we are given two strings
  // what are possible inputs?

  // requirements:
  // both should be a string
  // strings are the same length, all the rest are rejected

  // logic:
  // if the count of each character in one string is equal to counter of characters in the other strings, that permutation is possible
  // otherwise it's not
  // 1. loop through the characters of one string and save counter to hash
  // 2. loop through the characters of the other string and save counter to hash
  // 3. loop through hash and compare numbers between hashes
  // #1 and #2 can be combined together
  // the initial complexity will be 2n - which is n
  // a little optimization can be done combining first 2 steps

  // output: boolean value which reflects whether or not permutation is possible/exists

  return true;
}

function assert(actual, expected) {
  return actual === expected
    ? console.log('TEST PASSED')
    : console.log('\tTEST FAILED');
}

assert(isPermutationPossible('123', '1234'), false);
assert(isPermutationPossible('qwertyuiop', 1), false);
assert(isPermutationPossible('qwertyuiop', 'sdsadsa'), false);
assert(isPermutationPossible('qwerty', 'qwertys'), false);
assert(isPermutationPossible('qwerty', {}), false);
assert(isPermutationPossible('notna', 'anton'), true);
assert(isPermutationPossible('1234567890qazxsw', '0987654321xswqaz'), true);
