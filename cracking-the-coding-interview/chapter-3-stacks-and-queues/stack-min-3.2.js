var Stack = require('./stack');

class StackMin extends Stack {
  static push(item) {
    super.push(item);
    this.items = this.items || [];
    this.items.push(item);
  }

  static pop(item) {
    super.pop(item);
    this.items = this.items || [];
    this.items.pop();
  }

  static min() {
    return Math.min(...this.items);
  }

  static max() {
    return Math.max(...this.items);
  }
}

console.log('StackMin.isEmpty(); :>> ', StackMin.isEmpty());
StackMin.push(1);
StackMin.push(9);
StackMin.push(5);
console.log('StackMin.peek(); :>> ', StackMin.peek());
StackMin.pop();
StackMin.pop();
StackMin.pop();
// console.log('StackMin.peek(); :>> ', StackMin.peek());
console.log('StackMin.isEmpty(); :>> ', StackMin.isEmpty());
StackMin.push(9);
StackMin.push(4);
StackMin.push(157);
StackMin.push(-5);
StackMin.push(0);
StackMin.pop();
StackMin.pop();
StackMin.pop();
StackMin.pop();
StackMin.pop();
StackMin.pop();

console.log('StackMin.min() :>> ', StackMin.min());
console.log('StackMin.max() :>> ', StackMin.max());


// minimum = []

// push(5)
// push(1)
// pop()
// pop()
// push(3)
// push(4)
// push(0);
// push(9);
// push(-1);

// [1, 5, ]
