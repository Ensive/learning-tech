/*
What is functional programming?

- an approach to write software
- good when programming language is suitable, e.g. javascript with first class functions
- prefer pure functions
- composition > inheritance

Pure Functions

1. Given same input => same output
2. No side-effects

Referrential transparency.

Side Effects

- any change to external state
- touching the DOM
- HTTP requests
- console.log
- throwing an error (return, instead)
*/

// Convert to curried function:
// const add = (a, b) => a + b;
const add = (x) => (y) => x + y;

console.log(add(2)(3)); // 5

/*
createCounter(value?: number) => ({ // default value to 0
    inc: () => Counter,
    valueOf: () => number
})
*/
const createCounter = (value = 0) => ({
  inc: () => createCounter(value + 1),
  valueOf: () => value,
});

console.log([
  createCounter().inc().inc().valueOf(),
  createCounter(3).inc().inc().valueOf(),
]); // [2, 5]

/*
Function composition

(f ∘ g)(x) = f(g(x))
*/

// compose = (...fns) => (x) => y
const compose =
  (...fns) =>
  (x) =>
    fns.reduceRight((y, fn) => fn(y), x);
const pipe =
  (...fns) =>
  (x) =>
    fns.reduce((y, fn) => fn(y), x);
const asyncPipe =
  (...fns) =>
  (x) =>
    fns.reduce(async (y, fn) => fn(await y), x);

const g = (n) => n + 1;
const f = (n) => n * 2;
const h = compose(f, g);

console.log(h(20)); // 42

/*
TDD

- design tool more than testing tool
- most of my career, not always the best environment and people don't always recognize the power of it
- when I conduct pair programming, I try to understand what we're building and write the tests first
- I wish I could do more of that
- I do practice from time to time
- Great to combine with functional programming because you can write expectations very easily, and that also helps

How do we write testable code?

- React component code be a pure component with no side-effect
- Data can come as input as props
- Isolate side-effects
- Isolate the business processing logic
- Supports locality and improves developer experience
- tests are faster, code is easier to understand
- your requirements are covered
*/
