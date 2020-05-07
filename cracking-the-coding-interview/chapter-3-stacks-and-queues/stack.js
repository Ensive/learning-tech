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

class MyStack {
  constructor() {
    this.top = undefined;
  }

  static pop() {
    if (this.top == null) throw new Error('EmptyStackException');

    let item = this.top.data;
    this.top = this.top.next;
    return item;
  }

  static push(item) {
    let t = new StackNode(item);
    t.next = this.top;
    this.top = t;
  }

  static peek() {
    if (this.top == null) throw new Error('EmptyStackException');
    return this.top.data;
  }

  static isEmpty() {
    return this.top == null;
  }
}

console.log('MyStack.isEmpty(); :>> ', MyStack.isEmpty());
MyStack.push(1);
MyStack.push(9);
MyStack.push(5);
console.log('MyStack.peek(); :>> ', MyStack.peek());
MyStack.pop();
MyStack.pop();
// MyStack.pop();
console.log('MyStack.peek(); :>> ', MyStack.peek());
console.log('MyStack.isEmpty(); :>> ', MyStack.isEmpty());
// MyStack.push(9);
