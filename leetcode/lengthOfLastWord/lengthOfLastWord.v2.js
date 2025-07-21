var lengthOfLastWord = function (s) {
  const trimmed = s.trim();
  if (trimmed.split(" ").length === 1) return trimmed.length;

  let i = trimmed.length - 1;
  let lengthCount = 0;
  while (trimmed[i] !== " ") {
    lengthCount++;
    i--;
  }

  return lengthCount;
};
