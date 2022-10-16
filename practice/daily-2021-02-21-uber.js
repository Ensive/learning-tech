// Hi, here's your problem today. This problem was recently asked by Uber:

// Imagine you are building a compiler. Before running any code, the compiler must check that the parentheses in the program are balanced. Every opening bracket must have a corresponding closing bracket. We can approximate this using strings.

// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// An input string is valid if:
// - Open brackets are closed by the same type of brackets.
// - Open brackets are closed in the correct order.
// - Note that an empty string is also considered valid.

// Anton's THINKING
// parantheses in the program should balanced
// every opening must have a corresponding closing bracket
// 3 types of brackets
// DSA stack problem?

// iterate through string, we need to go through each item

// what is a check at every step?
// we need to keep track that opening bracket was closed

// what is the base case?
// dp or stack?
// we can assume that opening a bracket - is always good
// keep adding brackets to the stack and always pop them out when there is a closing bracket
// at the end if we still have brackets in the stack then the input string is invalid
//
// empty string - is okay

// edge case
// if first item is a closing bracket - return false; invalid
// if last item is opening bracket - return false; invalid

function isStringValid(s) {
  const bracketTypeOpening = ['{', '(', '['];
  const bracketTypeClosing = ['}', ')', ']'];
  const bracketsStack = [];

  const stringLength = s.length;
  if (stringLength === 0) {
    return true;
  }

  if (
    stringLength === 1 &&
    [...bracketTypeClosing, ...bracketTypeOpening].indexOf(s[0]) > 0
  ) {
    return false;
  }

  if (bracketTypeClosing.indexOf(s[0]) > 0) {
    return false;
  }

  if (bracketTypeOpening.indexOf(s[stringLength - 1]) > 0) {
    return false;
  }

  for (let i = 0; i < stringLength; i++) {
    const isOpeningBracket = bracketTypeOpening.indexOf(s[i]) > 0;
    if (isOpeningBracket) {
      bracketsStack.push(s[i]);
      continue;
    }

    const isClosingBracket = bracketTypeClosing.indexOf(s[i]) > 0;
    if (isClosingBracket) {
      // peek into stack
      const stackTopBracket = bracketsStack[bracketsStack.length - 1];
      const openingBracket = bracketTypeOpening.indexOf(stackTopBracket);
      const closingBracket = bracketTypeClosing.indexOf(s[i]);

      if (openingBracket === closingBracket) {
        bracketsStack.pop();
        continue;
      } else {
        return false;
      }
    }
  }

  return true;
}

function assert(actual, expected) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log('TEST PASSED!');
    return 0;
  }

  console.log('\n TEST FAILED!');
  console.log('actual :>> ', actual);
  console.log('expected :>> ', expected);

  return 1;
}

assert(isStringValid('((()))'), true);
assert(isStringValid('[()]{}'), true);
assert(isStringValid('({[)]'), false);
