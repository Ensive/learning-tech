/**
 * Applies the async function to each element of array.
 * @param input An array of elements to be mapped.
 * @param asyncFn any asynchronous function that accepts one
 * argument and returns a promise.
 * @param limit the max number of in-flight asyncFns that can run.
 * @return {Promise} A promise resolving the fully mapped array.
 */
async function asyncMap(input, asyncFn, limit) {
  const results = [];
  const promises = new Map();
  let running = 0;

  for (let i = 0; i < input.length; i++) {
    if (running < limit) {
      running++;
      const index = i;
      const promise = asyncFn(input[index]);
      promises.set(index, promise);
      promise.then((value) => {
        running--;
        results.push(value);
        promises.delete(index);
      });
    } else {
      // const racePromise = Promise.race(promises);
      // const index = promises.findIndex((p) => p === racePromise);

      racePromise.then((value) => {
        running--;
        results.push(value);
        promises.splice(index, i);
      });
    }
  }

  return Promise.all(promises.concat(results));
}

// 1 => RUNNING
// 2 => RUNNING
// 3 => IDLE
asyncMap([1, 2, 3], square, 2).then((results) => console.log(results)); // [1,4,9, ...]

// helper functions
function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function square(num) {
  return new Promise((resolve, reject) => {
    const time = randomIntFromInterval(500, 1500);
    console.log('time :>> ', time);
    setTimeout(() => {
      resolve(num * num);
    }, time);
  });
}
