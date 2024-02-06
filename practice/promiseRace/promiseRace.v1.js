export default function promiseRace(iterable) {
  return new Promise((resolve, reject) => {
    if (iterable.length === 0) return;

    iterable.forEach(async (item) => {
      try {
        const value = await item;
        resolve(item);
      } catch (e) {
        reject(e);
      }
    });
  });
}
