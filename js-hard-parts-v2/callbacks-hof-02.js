function tenSquared() {
  return 10 * 10;
}

// tenSquared();

function copyArrayWithAndMultiplyBy2(array) {
  const output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(array[i] * 2);
  }

  return output;
}

const myArray = [1, 2, 3];
const result = copyArrayWithAndMultiplyBy2(myArray);
