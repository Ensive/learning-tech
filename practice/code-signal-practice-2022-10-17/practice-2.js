function solution(a, b, k) {
  // input is 2 arrays of integers
  // k is integer

  // we iterate through two arrays simultaneously 2 x for loop? just one loop with different iterators
      // check if x from a and y from b concatenated converted to integer is < k
      // if check is satisfied we incremenet our counter os occurences (variable that we store outside of the for loop)
      // let's do this!

  let result = 0;

  for (let i = 0, j = a.length - 1; i < a.length; i++, j--) {
      const x = a[i];
      const y = b[j];

      if (parseInt(`${x}${y}`) < k) {
          result++;
      }
  }

  return result;
}
