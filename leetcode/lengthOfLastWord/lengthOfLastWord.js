function lengthOfLastWord(s: string): number {
  const cleanString = s.replace(/\s+/g, " "); // O(n)
  const words = cleanString.split(" ").filter((w) => !!w); // O(n)
  return words[words.length - 1].length;
}
