function renderPyramid(pyramidPeak) {
  for (let i = 1; i <= pyramidPeak; i++) {
    let line = '';
    line += '* '.repeat(i);
    console.log(line);
  }

  for (let i = pyramidPeak - 1; i >= 1; i--) {
    let line = '';
    line += '* '.repeat(i);
    console.log(line);
  }
}
