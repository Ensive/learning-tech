// Painter Tool
// canvas: 2D canvas
// paint(x, y, color)
// undo()  // undoes the last paint action
// redo()  // redoes the last undone action
// print_canvas()  // prints all assigned colors (and their x, y position) to the console
//
// Example:
// paint(1, 1, "green"): Assigns "green" to (1, 1) on canvas
// undo(): Removes "green" and reverts to previous color on canvas at (1, 1)
// redo(): Assigns "green" to (1, 1) on canvas
// print_canvas(): [(1, 1, “green”)]

// fixed size canvas
// 5x5

// 2d array for canvas, rows [], column ["color"]
//

class Canvas {
  // stack

  constructor(size = 5) {
    this.undoActionsStack = [];
    this.redoActionsStack = [];
    this.canvas = makeArray(5, 5, 'white');
  }

  paint(x, y, color) {
    this.undoActionsStack.push([x, y, this.canvas[y][x]]);
    this.canvas[y][x] = color;
    // clear redo stack
  }

  undo() {
    const [x, y, color] = this.undoActionsStack.pop();
    this.redoActionsStack.push([x, y, this.canvas[y][x]]);
    this.canvas[y][x] = color;
  }

  redo() {
    if (this.redoActionsStack.length === 0) return;
    const [x, y, color] = this.redoActionsStack.pop();
    this.canvas[y][x] = color;
    this.undoActionsStack.push([x, y, color]);
  }

  print_canvas() {
    // this.canvas.map(row);
  }
}

function makeArray(w, h, val) {
  var arr = [];
  for (let i = 0; i < h; i++) {
    arr[i] = [];
    for (let j = 0; j < w; j++) {
      arr[i][j] = val;
    }
  }
  return arr;
}
