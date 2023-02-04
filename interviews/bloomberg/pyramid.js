/*

implement a pyramid function that takes an integer value and prints asterisks up to that number and then back down:

pyramid(3)
*
**
***
**
*

pyramid(5)
*
**
***
****
*****
****
***
**
*

*/

// function renderPyramid(pyramidPeak) {
//     for (let i = 0; i < pyramidPeak; i++) { // 3
//         for (let k = 0; k < i; k++) {
//             console.log('*');
//         }

//     }

// for (let j = pyramidPeak; j > 0; j--) {
//     for (let k = j; k > 0; k--) {
//         console.log('*');
//     }
// }
// }

function renderPyramid(pyramidPeak) {
  const pyramid = [];

  for (let i = 1; i <= pyramidPeak; i++) {
    let line = '';
    for (let k = 0; k < i; k++) {
      line += '*'
    }

    pyramid.push(line);
  }

  const reversedPyramid = [...pyramid].reverse();
  reversedPyramid.shift();
  const completePyramid = pyramid.concat(reversedPyramid)
  completePyramid.forEach((line) => console.log(line));
}

// renderPyramid(3);
renderPyramid(5);
