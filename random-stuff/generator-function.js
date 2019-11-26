// function* generator(i) {
//   yield i;
//   yield i + 10;
// }

// var gen = generator(10);

// console.log('gen :', gen);
// console.log('gen.next().value :', gen.next().value);
// console.log('gen.next().value :', gen.next().value);
// console.log('gen.next().value :', gen.next().value);

function* anotherGenerator(i) {
  yield i + 1;
  yield i + 2;
  yield i + 3;
}

function* generator(i) {
  yield i;
  yield* anotherGenerator(i);
  yield i + 10;
}

var gen = generator(10);

// console.log('gen.next().value :', gen.next().value);

// console.log('gen.next().value :', gen.next().value);
// console.log('gen.next().value :', gen.next().value);
// console.log('gen.next().value :', gen.next().value);

// console.log('gen.next().value :', gen.next().value);

function* logGenerator() {
  console.log(0);
  console.log(1, yield);
  console.log(2, yield);
  console.log(3, yield);
}

var logGen = logGenerator();

console.log('logGen.next().value :', logGen.next().value);
console.log('logGen.next("pretzel").value :', logGen.next('pretzel').value);
