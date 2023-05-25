var TimeLimitedCache = function () {
  // use Map() instead of Object()
  this.cache = {};
};

/**
 * @param {number} key
 * @param {number} value
 * @param {number} time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function (key, value, duration) {
  if (typeof this.cache[key] !== 'undefined' && !this.cache[key].expired) {
    this.cache[key].value = value;
    this.cache[key].duration = duration;

    clearTimeout(this.cache[key].timeout);
    this.cache[key].timeout = setTimeout(() => {
      this.cache[key].expired = true;
    }, duration);

    return true;
  }

  this.cache[key] = {
    key,
    value,
    duration,
    expired: false,
  };

  this.cache[key].timeout = setTimeout(() => {
    this.cache[key].expired = true;
  }, duration);

  return false;
};

/**
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function (key) {
  if (this.cache[key] && !this.cache[key].expired) {
    return this.cache[key].value;
  }

  return -1;
};

/**
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function () {
  let counter = 0;

  for (const key in this.cache) {
    if (this.cache[key].expired === false) {
      counter++;
    }
  }

  return counter;
};

/**
 * Your TimeLimitedCache object will be instantiated and called as such:
 * var obj = new TimeLimitedCache()
 * obj.set(1, 42, 1000); // false
 * obj.get(1) // 42
 * obj.count() // 1
 */
