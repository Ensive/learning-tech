// grid as 2-dimensional array of rows and columns 3x3
// user actions -> play
// 1 on play => randomly highlight cells as a function()
// 2 the number of highlighted a width of the board
// 3 map randomy highlighted to coordinates
// 4 cache the result of highlighted
// 5 hide the cells on setTimeout()

// user click => isCellWasHighligted()
// feature 1: track of mistakes
// feature 2: track of successful clicks

let highlightedCellsCache = [];
const TIMEOUT = 1000;
const App = () => {
  // TODO: generate grid of size X
  const grid = [
    [
      [0, 0],
      [1, 0],
      [2, 0],
    ],
    [
      [0, 1],
      [1, 1],
      [2, 1],
    ],
    [
      [0, 2],
      [1, 2],
      [2, 2],
    ],
  ];

  // TODO: use difficulty with range slider to set the grid size
  const [difficulty, setDifficulty] = React.useState(3);
  const [highlightedCells, setHighlightedCells] = React.useState([]);
  console.log('highlightedCellsCache :>> ', highlightedCellsCache);

  return (
    <div>
      <h1>Memory game</h1>
      <button onClick={onPlay}>Play</button>
      {grid.map((row, rowIndex) => {
        return (
          <div key={rowIndex}>
            {row.map((cell, cellIndex) => {
              const cellNumber = cellIndex + rowIndex * difficulty;
              const className = highlightedCells.includes(cellNumber)
                ? 'cell cell--highlighted'
                : 'cell';
              return (
                <span
                  key={cellNumber}
                  onClick={onCellClick}
                  className={className}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );

  function onPlay() {
    highlightAndHideCells();
  }

  function highlightAndHideCells() {
    // TODO: pass size of the grid
    highlightedCellsCache = generateArrayWithRandomNumbersFromInterval(
      0,
      difficulty * difficulty - 1,
      difficulty,
    );
    setHighlightedCells(highlightedCellsCache);

    // TODO: take care of timeout
    setTimeout(hideHighlitedCells, TIMEOUT);
  }

  function onCellClick() {}

  function hideHighlitedCells() {
    setHighlightedCells([]);
  }
};

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function generateArrayWithRandomNumbersFromInterval(from, to, limit) {
  let highlighted = [];
  while (highlighted.length < limit) {
    const randomNumber = randomIntFromInterval(from, to);
    if (!highlighted.includes(randomNumber)) {
      highlighted.push(randomNumber);
    }
  }

  console.log('highlighted :>> ', highlighted);
  return highlighted;
}

ReactDOM.render(<App />, document.getElementById('root'));
