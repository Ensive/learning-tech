const Stack = require('./Stack.js');
const Queue = require('./Queue.js');
const assert = require('./assert.js');

// Stack LAST IN FIRST OUT
// Queue FIRST IN FIRST OUT

class MyQueue {
  constructor() {
    this.original = new Stack();
    this.temp = new Stack();
  }
  // Stack: add 2, 5, 7
  // Stack: remove 5, 7 => Temporarily Stack, 2 out, push to original Stack 5, 7
  // peek(): do the same when remove without deleting
  // isEmpty() simple
  add(item) {
    // if (!this.original) {
    //   this.original = new Stack();
    //   this.original.add(item);
    // }
    this.original.push(item);
  }

  remove() {
    while (!this.original.isEmpty()) {
      this.temp.push(this.original.pop());
    }

    const result = this.temp.pop();

    while (!this.temp.isEmpty()) {
      this.original.push(this.temp.pop());
    }

    return result;
  }

  peek() {
    while (!this.original.isEmpty()) {
      this.temp.push(this.original.pop());
    }

    const result = this.temp.peek();

    while (!this.temp.isEmpty()) {
      this.original.push(this.temp.pop());
    }

    return result;
  }

  isEmpty() {
    return this.original.isEmpty();
  }
}

const queue = new MyQueue();
queue.add(2);
queue.add(5);
queue.add(7);

queue.remove(); // 5, 7

assert(queue.peek(), 5);

queue.add(2);
queue.add(5);
queue.add(7);

queue.remove(); // 7, 2, 5, 7

queue.add(2);
queue.add(5);
queue.add(7);

queue.remove(); // 2, 5, 7, 2, 5, 7

queue.add(2);
queue.add(5);
queue.add(7); // 2, 5, 7, 2, 5, 7, 2, 5, 7

assert(queue.peek(), 2);

queue.remove();

assert(queue.peek(), 5);

queue.remove();

assert(queue.peek(), 7);

assert(queue.isEmpty(), false);
