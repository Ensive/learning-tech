function executionContext() {
  window.document.getElementsByClassName('clock')[0].innerHTML = new Date();

  function printHell() {
    // debugger
    console.log('Hell ' + i);
    console.log(' ');
  }

  // for (var i = 0; i < 11; i++) {
  //   setTimeout(printHell, i * 100);
  // }

  setInterval(() => {
    const date = new Date();
    window.document.getElementsByClassName('clock')[0].innerHTML = date;
  }, 1000);

  const square = document.getElementsByClassName('square')[0];
  // let left = square.style.left;
  let timeout;
  for (let i = 0; i < 500; i++) {
    timeout = setTimeout(function moveSquareLeft() {
      square.style.left = i + 'px';
      clearTimeout(timeout);
    }, i * 2);
  }

  // clearTimeout(timeout);
  console.log(timeout);

  // setInterval(() => {
  //   // debugger
  //   left++;
  //   square.style.left = left + 'px';
  //   if (left === 500) left = 0;
  // }, 1);
}
