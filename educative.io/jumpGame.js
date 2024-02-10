export function jumpGame(numbers) {
  let maxReach = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (i > maxReach) {
      return false;
    }

    maxReach = Math.max(maxReach, i + numbers[i]);
    if (maxReach >= numbers.length - 1) {
      return true;
    }
  }

  return maxReach >= numbers.length - 1;
}
