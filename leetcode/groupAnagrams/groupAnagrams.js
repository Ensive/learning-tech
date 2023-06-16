var groupAnagrams = function (strs) {
  // iterate over strs
  // sort the string by chars
  // add to hash map key is sorted chars in a string, value is array of actual strings
  // use Map()
  // create 2D Array from Map values and return it

  const anagramsMap = new Map();
  const strsLength = strs.length;
  for (let i = 0; i < strsLength; i++) {
    const actualString = strs[i];
    const sortedString = strs[i].split('').sort().join('');

    if (anagramsMap.has(sortedString)) {
      anagramsMap.get(sortedString).push(actualString);
    } else {
      anagramsMap.set(sortedString, [actualString]);
    }
  }

  return Array.from(anagramsMap.values());
};
