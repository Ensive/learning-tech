const Stack = require('./Stack.js');
const assert = require('./assert.js');

// 1. we have Stack, and another Stack
// 2.

class MyStack extends Stack {
  sort() {
    const tempStack = new Stack();

    // sort
    // 1. pop from original = -5 //
    // 2. push into tempStack - 5
    // 3. pop from original 2
    // 4. while !tempStack.isEmpty() pop
    // 5.


    // while !original.isEmpty()
    // while tempStack.peek() < original.pop()
      // temp = tempStack.pop()
      // tempStack.push(original.pop())`

  }
}

const myStack = new MyStack();
myStack.push(2);
myStack.push(5);
myStack.push(1);
myStack.push(9);
myStack.push(2);
myStack.push(-5);

assert(myStack, {
  top: {
    data: -5,
    next: {
      data: 2,
      next: {
        data: 9,
        next: {
          data: 1,
          next: {
            data: 5,
            next: {
              data: 2,
              next: undefined
            }
          }
        }
      }
    }
  }
});

assert(myStack.sort(), {
  top: {
    data: -5,
    next: {
      data: 1,
      next: {
        data: 2,
        next: {
          data: 2,
          next: {
            data: 5,
            next: {
              data: 9,
              next: undefined
            }
          }
        }
      }
    }
  }
});
