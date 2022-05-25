// input array of integers, that represent stock price on each day
// a price on a day when I can maximize profit
function maxProfitFromStocks(stockPrices) {
  // X 1. start going through days, starting from day 1 [0]
  // 2. we can assume that I am buying stock every day to be able to compare the results
  // 3. I can buy now and sell only in the future - which means that I likely going through the array only one time
  // 4. every day I can compare my last maximum profit with the new potential maximum profit
  // 5. we keep last maximum last profit until the last day.
  // 6. we will need to keep the price stock for that day, and actual maximum profit

  // if we would need to figure out the minimum loss when negative values has to be count we better store non integer value in maxProfit
  let currentMaxProfit;
  let stockPriceToBuyAt;

  const len = stockPrices.length;
  // we store len outside of the loop to avoid calculating length of the array on every loop run
  for (let i = 0; i < len; i++) {
    // what if we given array of 1 element
    // what if we given non array value

    // first day
    if (i === 0) {
      currentMaxProfit = stockPrices[i + 1] - stockPrices[i];
      stockPriceToBuyAt = stockPrices[i];
      continue;
    }

    // last day
    if (len - 1 === i) return stockPriceToBuyAt;

    // 1. if not maxProfit yet - we just add our first one
    // else if maxProfit exist we calculate and compare

    // let potentialMaxProfit = stockPrices[i + 1] - stockPrices[i];
    for (let k = i; k < len; k++) {
      potentialMaxProfit = stockPrices[k + 1] - stockPrices[i];
      if (potentialMaxProfit > currentMaxProfit) {
        currentMaxProfit = potentialMaxProfit;
        stockPriceToBuyAt = stockPrices[i];
      }
    }
  }

  return stockPriceToBuyAt;
}

// n * log n

function assert(actual, expected) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log('TEST PASSED!');
    return;
  }

  console.log('\tTEST FAILED!');
  console.log('\tactual :', actual);
  console.log('\texpected :', expected);
}

assert(maxProfitFromStocks([9, 11, 8, 5, 7, 10]), 5);

function maxProfitFromStocks2(stockPrices) {
  let maxCurrentPrice = 0;
  let maxProfit = 0;
  for (let i = stockPrices.length - 1; i >= 0; i--) {
    price = stockPrices[i];
    maxCurrentPrice = Math.max(maxCurrentPrice, price);
    maxProfit = Math.max(maxProfit, maxCurrentPrice - price);
  }

  return maxProfit;
}

assert(maxProfitFromStocks2([9, 11, 8, 5, 7, 10]), 5);
