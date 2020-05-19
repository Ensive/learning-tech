const Stack = require('./Stack');

const SetOfStacks = (() => {
  // * store list of stacks
  // * save length of stack (where?)
  // * set threshold

  const set = [];
  const threshold = 10;

  function push(item) {
    const currentStack = set[set.length - 1];
    if (!set.length || currentStack.length >= threshold) {
      const stack = new Stack();
      stack.push(item);
      stack.length = 1;
      set.push(stack);
      return;
    }

    currentStack.length += 1;
    set[set.length - 1].push(item);

    // check if set is not empty
    // check length for current stack
    // if length for current stack exceeds create a new one
  }

  function pop() {
    let currentStack = set[set.length - 1];
    if (!set.length) {
      throw new Error('The set is empty');
    }

    currentStack.pop();
    currentStack.length -= 1;

    if (currentStack.length === 0) {
      set.pop();
    }
  }

  function popAt(stackIndex) {
    if (!set.length) {
      throw new Error('The set is empty');
    }

    if (!set[stackIndex]) {
      throw new Error(`There is no stack at index ${stackIndex}`);
    }

    set[stackIndex].pop();
    set[stackIndex].length -= 1;
  }

  return {
    push,
    pop,
    popAt,
    set
  };
})();

for (let i = 1; i <= 13; i++) {
  SetOfStacks.push(i);
}

SetOfStacks.popAt(0);
SetOfStacks.push(999);
SetOfStacks.pop();

// SetOfStacks.pop();
// SetOfStacks.pop();
// SetOfStacks.push(999);
// SetOfStacks.pop();

console.log('SetOfStacks :>> ', SetOfStacks.set);

// push() => Stack[0]
// push(4) => Stack[0].length = 10 => Stack[1].push()
// pop() => Stack[1]
// pop() => Stack[1].length = 0 => Stack[0].pop()
// popAt(0) => Stack[0]
// popAt(4) => Stack[5]
