// arr = list
// r = coefficient

// HOW TO USE DICTIONARY?
// 1. Need sorting? - N/A
// 2. r * r = r^2
// 3. constraints: i < j < k
// 4. return just counter, not instances of occurrences

// 1 stage - arr is sorted
// edge cases:
// - unsorted
// - same values
function countTriplets(arr, r) {
  // 1. count occurrences for each item (first loop) - store in hashmap {key(value): value(count)}
  // const occurrences = {
  //   1: [0],
  //   3: [1],
  //   9: [2, 4],
  //   27: [5],
  //   81: [3, 6]
  // };

  // const occurrences = {
  // 10: [0, 1, 2, 3, 4 ]
  // }

  const occurrences = {};
  let result = 0;

  // n
  for (let i = 0; i < arr.length; i++) {
    if (occurrences[arr[i]]) {
      occurrences[arr[i]].push(i);
    } else {
      occurrences[arr[i]] = [i];
    }
  }

  const occurrences = {
    10: [0, 1, 2, 3, 4],
    10: [1],
    10: [2],
    10: [3],
    10: [4],
  };

  // const occurrences = {
  //   1: [0],
  //   3: [1],
  //   9: [2, 3],
  //   27: [4],
  //   81: [5]
  // };

  // console.log('occurrences :>> ', occurrences);

  // 2. iterate through - and count

  // n
  const uniqueArr = [...new Set(arr)];

  // m
  for (let i = 0; i < uniqueArr.length; i++) {
    const basis = uniqueArr[i]; // left
    const middleVal = uniqueArr[i] * r;
    const finalVal = uniqueArr[i] * r * r; // right

    // if the same values
    if (uniqueArr.length === 1 && r === 1) {
      return (arr.length - 3) * arr.length;
    }

    // if unsorted

    // if sorted & different values
    if (occurrences[middleVal] && occurrences[finalVal]) {
      result +=
        occurrences[middleVal].length *
        occurrences[finalVal].length *
        occurrences[basis].length;
    } else {
      continue;
    }
  }

  // 1 = 2 count
  // 3 = 2 count
  // 9 = 2 count

  // 3. return count total
  return result;
}

assert(countTriplets([1, 3, 9, 9, 27, 81], 3), 6);
assert(countTriplets([1, 5, 5, 25, 125], 5), 4);
assert(countTriplets([1, 2, 2, 4], 2), 2);
assert(countTriplets([10, 10, 10, 10, 10], 1), 10); // input: 5, 1, output: 10
assert(countTriplets([10, 10, 10, 10, 10, 10], 1), 18); // input: 5, 1, output: 10
assert(countTriplets([10, 10, 10, 10, 10, 10, 10], 1), 28); // input: 5, 1, output: 10

// (5 - 3) * 5 = 10;
// (6 - 3) * 6 = 18;
// (7 - 3) * 7 = 24;

//

// {0, 1, 2}
// {0, 1, 3}
// {0, 1, 4}
// {0, 2, 3}
// {0, 2, 4}
// {0, 3, 4}

// {1, 2, 3}
// {1, 2, 4}
// {1, 3, 4}

// {2, 3, 4}

// assert(countTriplets([1, 3, 9, 81, 9, 27, 81]));

function assert(actual, expected) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log('TEST PASSED!');
    return;
  }

  console.log('\tTEST FAILED!');
  console.log('\tactual :', actual);
  console.log('\texpected :', expected);
}

// 1st iteration
// 1 => 3, 9
// 3 => {1, 3}
// 9 => {1, 3, 9} [0, 1, 2] (temp store)
// how many 3? => count

// 2nd iteration
// 3 => 9
// 9 => 27
// how many 9? => count

// 1, 3, 3, 9, 9
// 0,1,3
// 0,2,3
// 0,1,4
// 0,1,5

// 2(3)
// 2(9)
