// Hi, here's your problem today. This problem was recently asked by Uber:

// Given a list of numbers, find if there exists a pythagorean triplet in that list. A pythagorean triplet is 3 variables a, b, c where a2 + b2 = c2

// THINKING
// input is a list of numbers
// integers?

// sorted/unsorted ?

// first: we need to sort the list O(n)
// second: iterate through every item... O(n)
// a*a + b*b - c*c = 0
// we take assume every item we iterate through in array is a, after it's b and c or c and b.

// base check

// num[i]^2 + num[i + 1]^2 - num[i + 2]^2 = 0; or
// since array is sorted, we don't need to check if // num[i]^2 + num[i + 2]^2 - num[i + 1]^2 = 0;

// [3, 5, 12, 5, 13]

// 3, 5, 12, 13
function findPythagoreanTriplets(nums) {
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      const isTriplet =
        square(nums[i]) + square(nums[i + j + 1]) - square(nums[i + j + 2]) ===
        0;
      if (isTriplet) {
        console.log(
          `${nums[i]}^2 + ${nums[i + j + 1]}^2 = ${nums[i + j + 2]}^2`,
        );

        return true;
      }
    }
  }

  return false;
}

assert(findPythagoreanTriplets([3, 5, 12, 5, 13]), true);
assert(findPythagoreanTriplets([3, 12, 5, 13]), true);
assert(findPythagoreanTriplets(randomArray(100)), true);

function randomArray(length) {
  return Array.from({ length: length }, () =>
    Math.floor(getRandomArbitrary(2, 100)),
  ).sort((a, b) => a - b);
}

function square(number) {
  return number ** 2;
}

function assert(actual, expected) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log('TEST PASSED!');
    return 0;
  }

  console.log('\tTEST FAILED!');
  console.log('\tactual :>> ', actual);
  console.log('\texpected :>> ', expected);

  return 1;
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
