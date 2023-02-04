// const { resolve } = require('dns');

function square(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(num * num);
    }, Math.random());
  });
}

/**
 * Applies the async function to each element of array.
 * @param input An array of elements to be mapped.
 * @param asyncFn any asynchronous function that accepts one
 * argument and returns a promise.
 * @param limit the max number of in-flight asyncFns that can run.
 * @return {Promise} A promise resolving the fully mapped array.
 */
async function asyncMap(input, asyncFn, limit) {
  const result = [];

  for (let i = 0; i < input.length; i = (i + 1) * limit) {
    const processing = [];

    for (let k = 0; k < limit; k++) {
      if (input[i + k]) processing.push(asyncFn(input[i + k]));
    }

    const processed = await Promise.race(processing);
    console.log('processed :>> ', processed);
    for (let j = 0; j < processed.length; j++) {
      result.push(processed[j]);
    }
  }

  return new Promise((resolve, reject) => {
    resolve(result);
  });
}

// 1 => RUNNING
// 2 => RUNNING
// 3 => IDLE
asyncMap([1, 2, 3], square, 2).then((results) => console.log(results)); // [1,4,9]
