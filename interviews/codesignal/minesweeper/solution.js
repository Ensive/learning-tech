class Minesweeper {
  constructor(field) {
    this.field = field;
  }

  click(x, y) {
    const neighbours = [
      [
        [-1, 1],
        [0, 1],
        [1, 1],
      ],
      [
        [-1, 0],
        [0, 0],
        [1, 0],
      ],
      [
        [-1, -1],
        [0, -1],
        [1, -1],
      ],
    ];

    let bombCount = 0;

    const newState = neighbours.map((row) => {
      return row.map(([xOffset, yOffset]) => {
        if (this.field[x + xOffset][y + yOffset]) bombCount++;
        return -1;
      });
    });

    newState[1][1] = bombCount;

    return newState;
  }
}

// class API, crisp!
// state
// click - gives you back the result

console.log('minesweeper.click(1, 1) :>> ', minesweeper.click(1, 1));
console.assert(
  JSON.stringify(minesweeper.click(1, 1)) ===
    JSON.stringify([
      [-1, -1, -1],
      [-1, 5, -1],
      [-1, -1, -1],
    ]),
);
