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

class PainterTool {
  undoStack = [];
  redoStack = [];

  paint(x, y, color) {
    this.undoStack.push([x, y, color]);
  }

  undo() {
    const action = this.undoStack.pop();
    this.redoStack.push(action);
  }

  redo() {
    this.undoStack.push(this.redoStack.pop());
  }

  print_canvas() {
    return this.undoStack;
  }
}

const painterTool = new PainterTool();

painterTool.paint(1, 1, 'green');
painterTool.undo();
painterTool.redo();
let canvas = painterTool.print_canvas();

console.assert(JSON.stringify(canvas) === JSON.stringify([[1, 1, 'green']]));

painterTool.paint(1, 1, 'red');
canvas = painterTool.print_canvas();

console.log('canvas', canvas);
console.assert(JSON.stringify(canvas) === JSON.stringify([[1, 1, 'red']]));
