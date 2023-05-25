// Good
// - Data structures
// - Quick algorithm
// - Handle mistakes, move on

// Improve
// 1. write test first !
// 2. input is array of data structures, not array of dictionaries
//     1. less space usage for input too
// 3. trick me - why I jumped into distributed systems. see the problem as it is. no need for premature optimization

// FROM TO AMOUNT
// LENNY ANTON $100
// ANDREW LENNY $20

// LENNY -$80
// ANDREW -$20
// ANTON +$100

// // banks send multiple files to hub
// // we as a hub handling all the files with data and should output the final result of the transactions

// // output is delta

// const array = [ { from: 'Lenny', to: 'Anton', amount: 100 }, { from: 'Andrew', to: 'Lenny', 20 } ];

function provideDelta(transactions) {
  const result = {};

  if (transactions.length === 0) {
    return 0;
  }

  const transactionsAmount = transactions.length;
  for (let i = 0; i < transactionsAmount; i++) {
    if (result[transactions.from]) {
      result[transactions.from] -= transactions.amount;
    } else {
      result[transactions.from] = -transactions.amount;
    }

    if (result[transactions.to]) {
      result[transactions.to] += transactions.amount;
    } else {
      result[transactions.to] = transactions.amount;
    }
  }

  return result;
}

const output = { lenny: -80, andrew: -20, anton: 100 };
