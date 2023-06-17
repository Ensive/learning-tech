function renderPyramid(pyramidPeak) {
  const pyramid = [];

  for (let i = 1; i <= pyramidPeak; i++) {
    const line = '*'.repeat(i);
    pyramid.push(line);
  }

  const completePyramid = pyramid.concat(pyramid.slice(0, -1).reverse());
  completePyramid.forEach((line) => console.log(line));
}
