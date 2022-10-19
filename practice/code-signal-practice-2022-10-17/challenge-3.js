function solution(field, x, y) {
  // I love that I do this practice
  // I probably would need google to solve this :)))
  // okay, let's focus on a problem and show the math and CS skills!

  // rectangular grid of cells
  // locate the mines

  // checks
  // if the cell is mine - game over
  // cell with the number of mines around in 8 cells
      // if it's 0 reveal each neighbouring cell in the same way

  // recursion
  // tree

  // input: boolean matrix represents mines
  // x, y = coordinates of first click (It is guaranteed that the clicked cell does not contain a mine.)
  // x row, y = column

  // field = [[false, true, true],
  //      [true, false, true],
  //      [false, false, true]]

  // x = 1, y = 1

  // on click I need to count the number of minds around and give a number

  // how 1 point on a matrix connected to it's neighbours ?

  // 1, 1
  // (0, 0), (1, 0), (2, 0)
  // (0, 1), (1, 1), (2, 1)
  // (0, 2), (1, 2), (2, 2)

  // -1 and + 1 in all directions
  // which means
  // (x-1, y-1), (x, y-1), (x+1, y-1)
  // (x-1, y), (x, y), (x+1, y),
  // (x-1, y+1), (x, y+1), (x+1, y+1)

  // we should usy dynamic programming (recursion) to solve subproblem to solve bigger problem
  // how to work with matrix?


}
