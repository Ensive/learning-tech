/**
 * @param {Array} iterable
 * @return {Promise<Array>}
 */
export default async function promiseAll(iterable) {
  const results = [];
  const errors = [];

  for (let i = 0; i < iterable.length; i++) {
    try {
      const result = await iterable[i];
      results.push(result);
    } catch (e) {
      errors.push(e);
    }
  }

  return new Promise((resolve, reject) => {
    if (errors.length > 0) {
      reject(errors[0]);
    } else {
      resolve(results);
    }
  });
}
