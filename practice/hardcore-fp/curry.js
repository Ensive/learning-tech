const add = (x, y) => x + y;

add([1, 2]);
add(1, 2);

// const toPair = (f) => ([x, y]) => f(x, y);
const fromPair = (f) => (x, y) => f([x, y]);
const flip = (f) => (y, x) => f(x, y);
const curry = (f) => (x) => (y) => f(x, y);
const uncurry = (f) => (x) => (y) => f(x)(y);

// const result = fromPair(toPair(add))(1, 2);
// const result = flip(flip(add))(1, 3);

const curriedAdd = curry(add);
const increment = curriedAdd(1);

const result = increment(5);

console.log("result :>> ", result);
