// Complete the minimumBribes function below.
function minimumBribes(queue) {
  let bribes = 0;
  let i = 0;
  let swapOperations = 0;
  let total = queue.length;

  function countBribes() {
    // debugger;
    const initialPosition = i + 1;
    if (queue[i] - initialPosition > 2) {
      return 'Too chaotic';
    }

    let temp = queue[i];
    if (queue[i] > queue[i + 1]) {
      queue[i] = queue[i + 1];
      queue[i + 1] = temp;
      bribes++;
      i++;
      swapOperations++;
    }

    if (swapOperations === 0 && total === i + 1) {
      return bribes;
    }

    if (swapOperations > 0 && total === i + 1) {
      swapOperations = 0;
      i = 0;
      return countBribes();
    }

    if (swapOperations === 0 && i + 1 !== total) {
      i++;
      return countBribes();
    }

    if (swapOperations > 0 && i + 1 !== total) {
      swapOperations = 0;
      return countBribes();
    }
  }

  return countBribes();
}

assert(minimumBribes([2, 1, 5, 3, 4]), 3);
assert(minimumBribes([2, 5, 1, 3, 4]), 'Too chaotic');

function assert(actual, expected) {
  if (actual === expected) {
    console.log('TEST PASSED!');
    return;
  }

  console.log('\tTEST FAILED!');
  console.log('\tactual :', actual);
  console.log('\texpected :', expected);
}
