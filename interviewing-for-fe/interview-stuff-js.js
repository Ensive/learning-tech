/**
 * Given a string, return the reverse of it
 *
 * Example: 'Hello World' -> 'dlroW olleH'
 */
function reverseString(str) {
  return str.split('').reverse().join('');
}

console.log(reverseString('Hello World'));

/**
 * Given a string, return the same string with the first character in
 * upper case, and the rest lower case
 *
 * Example: 'hEllo WorLD' -> 'Hello world'
 */
function capitalizeString(str) {
  const firstLetterUppercase = str[0].toUpperCase();
  const theRestOfTheStringLowerCase = str.slice(1).toLowerCase();
  return firstLetterUppercase + theRestOfTheStringLowerCase;
}

console.log(capitalizeString('hEllo WorLD')); // Hello world

/**
 * Given an array of numbers, return the max
 *
 * Example: [9, 3, 40, 8] -> 40
 */
function getMaxFromArray(numArray) {
  return Math.max(...numArray);
}

console.log(getMaxFromArray([9, 3, 40, 8]));

/**
 * Given an array, return a new array with same values occuring exactly once
 *
 * Example: [4, 5, 2, 9, 9, 5] -> [4, 5, 2, 9]
 */
function getUniqueArray(dupedArray) {
  return Array.from(new Set(dupedArray));
}

// console.log(getUniqueArray([4, 5, 2, 9, 9, 5]));

/**
 * Given a multi-dimensional array, return an single-dimension array
 * containing, in order, all of the array values.
 *
 * Example:
 * [2, ['bar', [2, ['foo']], 2], [3]] -> [2, 'bar', 2, 'foo', 2, 3]
 */
function flattenArray(nestedArray) {
  let result = [];

  for (let i = 0; i < nestedArray.length; i++) {
    if (Array.isArray(nestedArray[i])) {
      result.push(flattenArray[nestedArray[i]]);
    } else {
      result.push(nestedArray[i]);
    }
  }

  return result;
}

function flattenArray(nestedArray) {
  return nestedArray.reduce(
    (flatArray, el) => [
      ...flatArray,
      ...(Array.isArray(el) ? flattenArray(el) : [el]),
    ],
    [],
  );
}

console.log(flattenArray([2, ['foo']]));

/**
 * Given a function (fn), return a new function that will call the original
 * function (fn) once only as long as the arguments remain the same.
 * It should return `fn`'s return value.
 *
 * Assume fn can only accept primitives as its arguments (ie Boolean, Number, String)
 *
 * Example:
 * const memoizedAdd = memoize(add);
 * memoizedAdd(1, 2); => 3 (`add` was invoked)
 * memoizedAdd(1, 2); => 3 (`add` was NOT invoked)
 */
function memoize(fn) {
  const cache = {};

  return (...args) => {
    console.log(args);
    const key = JSON.stringify(args);

    if (!(key in cache)) {
      cache[key] = fn(...args);
    }

    return cache[key];
  };
}

function add(a, b) {
  console.log(`invoked`);
  return a + b;
}

const memoizedAdd = memoize(add);
memoizedAdd(1, 2);
memoizedAdd(1, 2);
// console.log(memoize(add)(1,2));

/**
 * BONUS POINTS!
 *
 * 1. Turn the functions above into prototype methods on their appropriate types
 * 2. Discuss pros and cons
 *
 */
