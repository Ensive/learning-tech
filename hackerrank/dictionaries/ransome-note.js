// both inputs are arr of strings
function checkMagazine(magazine, note) {
  // can we form note from magazine (case sensitive)
  let resultMagazine = {};
  let resultNote = {};

  for (let i = 0; i < note.length; i++) {
    if (resultNote[note[i]]) {
      resultNote[note[i]] += 1;
    } else {
      resultNote[note[i]] = 1;
    }
  }

  for (let k = 0; k < magazine.length; k++) {
    if (resultMagazine[magazine[k]]) {
      resultMagazine[magazine[k]] += 1;
    } else {
      resultMagazine[magazine[k]] = 1;
    }
  }

  for (const word in resultNote) {
    if (!(resultMagazine[word] && resultMagazine[word] >= resultNote[word])) {
      console.log('No');
      return 'No';
    }
  }

  console.log('Yes');
  return 'Yes';
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

assert(
  checkMagazine(
    ['give', 'me', 'one', 'grand', 'today', 'night'],
    ['give', 'one', 'grand', 'today']
  ),
  'Yes'
);

assert(
  checkMagazine(
    ['two', 'times', 'three', 'is', 'not', 'four'],
    ['two', 'times', 'two', 'is', 'four']
  ),
  'No'
);

assert(
  checkMagazine(
    ['ive', 'got', 'a', 'lovely', 'bunch', 'of', 'coconuts'],
    ['ive', 'got', 'some', 'coconuts']
  ),
  'No'
);
