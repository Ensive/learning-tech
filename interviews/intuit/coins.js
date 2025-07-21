// Given an input amount, write a function to return the least number of coins required to make change.

//To begin, assume the function signature looks like this:

//func makeChange(amount: Float) -> ??

//Example 1:

//Amount = $0.83
//Quarters = 3
//Nickels = 1
//Pennies = 3

//Example 2:
//Amount = $0.20
//Dimes = 2

// coins
// quarters 25, dime 10, nickels 5, penny 1

function round(number, precision) {
  return parseFloat(number.toFixed(precision));
  // let factor = Math.pow(10, precision);
  // return Math.round(number * factor) / factor;
}

function makeChange(amount) {
  const result = {
    quarters: 0,
    dimes: 0,
    nickels: 0,
    pennies: 0,
  };

  let target = amount;
  const reach = 0;
  const coins = [0.25, 0.1, 0.05, 0.01];
  while (amount !== 0) {
    while (amount >= coins[0]) {
      result.quarters += 1;
      amount = round(amount - coins[0], 2); // 0.83 - 0.25
    }

    while (amount >= coins[1]) {
      // 0.08
      result.dimes += 1;
      amount = round(amount - coins[1], 2);
    }

    while (amount >= coins[2]) {
      result.nickels += 1;
      amount = round(amount - coins[2], 2);
    }

    while (amount >= coins[3]) {
      result.pennies += 1;
      amount = round(amount - coins[3], 2);
    }
  }

  console.log("result :>> ", result);
  return result;
}

makeChange(0.83);
makeChange(0.23);
makeChange(0.2);

// the only fix I needed to apply is >= instead of >
