function rotateImage90(imageMatrix) {
  const imageLength = imageMatrix.length;
  let newImage = [];

  let i = 0;
  while (imageLength > i) {
    for (let k = 0; k < imageLength; k++) {
      const pixel = imageMatrix[imageLength - 1 - i][k];

      if (newImage[k]) {
        newImage[k].push(pixel);
      } else {
        newImage[k] = [];
        newImage[k].push(pixel);
      }
    }
    i++;
  }

  return newImage;
}

assert(
  rotateImage90([
    [1, 2],
    [3, 4]
  ]),
  [
    [3, 1],
    [4, 2]
  ]
);

assert(
  rotateImage90([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]),
  [
    [7, 4, 1],
    [8, 5, 2],
    [9, 6, 3]
  ]
);

function assert(actual, expected) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log('TEST PASSED!');
    return;
  }

  console.log('\tTEST FAILED!');
  console.log('\tactual :', actual);
  console.log('\texpected :', expected);
}
