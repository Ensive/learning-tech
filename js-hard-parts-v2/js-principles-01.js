function result(x, y) {
  const z = 2;
  debugger
  return multiplyBy2(x) + add4(y) + z;
}

function multiplyBy2(input) {
  return input * 2;
}

function add4(input) {
  return input + 4;
}

window.result(1, 2);
