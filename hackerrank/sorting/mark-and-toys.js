// toys
// list of toy prices
// money amount

// Complete the maximumToys function below.
function maximumToys(prices, k) {
  // n log n
  prices.sort((a, b) => a - b);

  let toysCount = 0;
  let totalPrice = 0;
  let i = 0;

  // n
  while (totalPrice < k) {
    totalPrice += prices[i];

    if (totalPrice <= k) {
      toysCount++;
    } else {
      return toysCount;
    }

    i++;
  }

  return toysCount;
}

// O(nlogn + n)
// O(nlogn)

// O(nlogn)
// O(nlogn + n)
// O(2n) => O(n)
// O(nlogn)
// O(logn)



assert(maximumToys([1, 2, 3, 4], 7), 3);

function assert(actual, expected) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log('TEST PASSED!');
    return;
  }

  console.log('\tTEST FAILED!');
  console.log('\tactual :', actual);
  console.log('\texpected :', expected);
}
