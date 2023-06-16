function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  const charCount = new Map();
  for (let i = 0; i < s.length; i++) {
    const charS = s[i];
    const charT = t[i];

    charCount.set(charS, (charCount.get(charS) || 0) + 1);
    charCount.set(charT, (charCount.get(charT) || 0) - 1);
  }

  for (let [, value] of charCount) {
    if (value !== 0) return false;
  }

  return true;
}
