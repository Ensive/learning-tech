function lengthOfLongestSubstring(s: string): number {
  if (s.length === 1) return 1;

  let maxSubstrLength = 0;
  const seenCharacters = new Map<string, number>();

  const length = s.length;
  let count = 0;
  for (let i = 0; i < length; i++) {
    if (seenCharacters.has(s[i])) {
      maxSubstrLength = Math.max(maxSubstrLength, count);

      i = seenCharacters.get(s[i])!;
      seenCharacters.clear();
      count = 0;
    } else {
      count++;
      seenCharacters.set(s[i], i);
    }

    if (count > maxSubstrLength) maxSubstrLength = count;
  }

  return maxSubstrLength;
}
