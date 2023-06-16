var groupAnagrams = function (strs) {
  const anagramsMap = new Map();
  const result = [];

  for (const str of strs) {
    const charCount = Array(26).fill(0);

    // Count the frequency of characters in the string
    for (const char of str) {
      const charIndex = char.charCodeAt() - 97; // Get the index of the character in the count array
      charCount[charIndex]++;
    }

    // Generate a unique key for the anagram group based on the character count
    const key = charCount.join('#');

    // Update the anagramsMap
    if (anagramsMap.has(key)) {
      anagramsMap.get(key).push(str);
    } else {
      anagramsMap.set(key, [str]);
    }
  }

  // Collect the anagram groups from the map into the result array
  for (const group of anagramsMap.values()) {
    result.push(group);
  }

  return result;
};
