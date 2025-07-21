export default function debounce(func, wait) {
  let timeout;

  function debounced(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(this, args);
    }, wait);
  }

  debounced.cancel = function () {
    clearTimeout(timeout);
    timeout = null;
  };

  debounced.flush = function () {
    if (timeout) {
      clearTimeout(timeout);
      func.apply(this, args);
      timeout = null;
    }
  };

  return debounced;
}
