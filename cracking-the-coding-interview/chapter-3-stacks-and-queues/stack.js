class StackNode {
  constructor(item) {
    this.data = undefined;
    // TODO: ???
    this.next = this.StackNode(item);
  }

  StackNode(data) {
    this.data = data;
  }
}

class Stack {
  pop() {
    if (this.top == null) throw new Error('EmptyStackException');

    let item = this.top.data;
    this.top = this.top.next;
    return item;
  }

  push(item) {
    let t = new StackNode(item);
    t.next = this.top;
    this.top = t;
  }

  peek() {
    if (this.top == null) throw new Error('EmptyStackException');
    return this.top.data;
  }

  isEmpty() {
    return this.top == null;
  }
}

// console.log('MyStack.isEmpty(); :>> ', MyStack.isEmpty());
// MyStack.push(1);
// MyStack.push(9);
// MyStack.push(5);
// console.log('MyStack.peek(); :>> ', MyStack.peek());
// MyStack.pop();
// MyStack.pop();
// MyStack.pop();
// console.log('MyStack.peek(); :>> ', MyStack.peek());
// console.log('MyStack.isEmpty(); :>> ', MyStack.isEmpty());
// MyStack.push(9);

// Array
// Stack

//
// var N = 9999999999;
// for (var i = 0; i < N; i++) {
//   // operations
//   for (var k = 0, k < N; k++) {

//   }
// }

// for (var p = 0...) {

// }

// O(n) - complexity
// O(n * n) -
// O(3n) -
// O(1) -
// var i = 1;
// var a = [1, 2, 3]
// a[0] = 1;
// a.sort(); O(n * log n)

module.exports = Stack;
