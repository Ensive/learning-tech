function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  const sSorted = s.split('').sort();
  const tSorted = t.split('').sort();

  let i = 0;
  const length = sSorted.length;
  while (i < length) {
    if (sSorted[i] !== tSorted[i]) {
      return false;
    }

    i++;
  }

  return true;
}
