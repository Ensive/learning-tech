const add = (x, y) => x + y;

// const curry = f =>
//   x => y => f(x, y)

const curry = function (f) {
  return function (x) {
    return function (y) {
      return f(x, y);
    };
  };
};

// const result = curry(add)(2)(3);

const modulo = curry((x, y) => y % x)

const isOdd = modulo(2) // (2, y) => y % 2

console.log('isOdd :', isOdd);

const result = isOdd(157)

console.log('result :', result);
