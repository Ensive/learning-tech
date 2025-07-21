// refactored by chatGPT
export default function debounce(func, wait) {
  let timeout;
  let lastArgs;
  let lastThis;

  function debounced(...args) {
    lastArgs = args;
    lastThis = this;

    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(lastThis, lastArgs);
      lastArgs = lastThis = null;
    }, wait);
  }

  debounced.cancel = function () {
    clearTimeout(timeout);
    timeout = null;
    lastArgs = lastThis = null;
  };

  debounced.flush = function () {
    if (timeout) {
      clearTimeout(timeout);
      func.apply(lastThis, lastArgs);
      timeout = null;
      lastArgs = lastThis = null;
    }
  };

  return debounced;
}
