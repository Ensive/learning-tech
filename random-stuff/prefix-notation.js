function result_expression(expression, variables) {
  const expr = expression.split(' ');
  const length = expr.length;
  const digits = [];

  for (let i = 0; i < length; i++) {
    if (expr[i].length > 1) return null;

    if (!isNaN(expr[i]) && Number.isFinite(expr[i])) {
      digits.push(expr[i])
    }

    // if ()
  }
}
с
assert(result_expression('+ 1 5', {}), 6);
assert(result_expression('+ 1 2 3', {}), null);
assert(result_expression('+ 1', {}), null);
assert(result_expression('9', {}), 9);
assert(result_expression('* + 1 2 3', {}), 9);
assert(result_expression('+ 6 * - 4 + 2 3 8', {}), -2); // 6 + (8 * (4 - ( 3 + 2 )))
assert(result_expression('-+1 5 3', {}), null); // 3 - (5 + 1)
assert(result_expression('+ 1                   2', {}), 3);
assert(
  result_expression('* + 2 x y', {
    x: 1,
    y: 3
  }),
  9
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
