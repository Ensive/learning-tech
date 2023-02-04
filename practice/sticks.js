// Given an array of N sticks of certain lengths, and a target length K. You have to pick the minimum number of sticks from the given array to form K. In other words, you have to use the fewest amount of sticks possible. You are able to use each stick several times.

// sorting the array in ascending order (NOT SURE)
// let's assume that array is sorted
// if the sum of the first n elements is less than k, then we can use the first n elements to form k
// if the sum of the first n elements is greater than k, then we can't use the first n elements to form k

function getKWithMinNumberOfSticks(n, k, sticks) {
  // iterate over array
  //
}

// talk about space and time complexity

assert(getKWithMinNumberOfSticks(5, 5, [1, 2, 3, 4, 5]) === 1);
assert(getKWithMinNumberOfSticks(3, 13, [1, 5, 12]) === 2);
assert(getKWithMinNumberOfSticks(4, 68, [1, 14, 30, 17]) === 4);
assert(getKWithMinNumberOfSticks(6, 109, [13, 17, 43, 100, 110, 120]) === -1);
