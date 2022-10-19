function solution(arr) {
  // subarray = subarray.length < arr.length
  // how many subarray we can form? (a.length)! sub arrays

  // iterate through every item and form all possible subarrays
      // how do we form sub array ? (in a nested for loop)
      // we have access to current item, length and next X items ?
      // on every step check if formed subarray is a sawtooth sequence and increase our result counter

  // time complexity should be huge :D at least O(n * n) or O(n!)

  let result = 0;
  for (let i = 0; i < arr.length; i++) {
      let subarray = [arr[i]];

      if (isSawtoothSequence(subarray)) result++;

      for (let j = i + 1; j < arr.length; j++) {
          subarray[j] = arr[j];
          if (isSawtoothSequence(subarray)) result++;
      }
  }

  return result;
}

function isSawtoothSequence(subarray) {
  for (let i = 0; i < subrray.length; i++) {
      // TODO: cover two edge cases

      const strictlyGreater = subarray[i] > subarray[i - 1] && subarray[i] > subarray[i + 1];
      const strictlyLess = subarray[i] < subarray[i - 1] && subarray[i] < subarray[i + 1];

      if (strictlyGreater || strictlyLess) {
          continue;
      } else {
          return false;
      }
  }

  return true;
}
