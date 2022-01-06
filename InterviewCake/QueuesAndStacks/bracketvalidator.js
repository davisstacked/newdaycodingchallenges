// You're working with an intern that keeps coming to you with JavaScript code that won't run because the braces, brackets, and parentheses are off. To save you both some time, you decide to write a braces/brackets/parentheses validator.

// Let's say:

// '(', '{', '[' are called "openers."
// ')', '}', ']' are called "closers."
// Write an efficient function that tells us whether or not an input string's openers and closers are properly nested.

// Examples:

// "{ [ ] ( ) }" should return true
// "{ [ ( ] ) }" should return false
// "{ [ }" should return false

// Solution
// We iterate through our string, making sure that:

// each closer corresponds to the most recently seen, unclosed opener
// every opener and closer is in a pair
// We use a stack ↴ to keep track of the most recently seen, unclosed opener. And if the stack is ever empty when we come to a closer, we know that closer doesn't have an opener.

// So as we iterate:

// If we see an opener, we push it onto the stack.
// If we see a closer, we check to see if it is the closer for the opener at the top of the stack. If it is, we pop from the stack. If it isn't, or if the stack is empty, we return false.
// If we finish iterating and our stack is empty, we know every opener was properly closed.

function isValid(code) {

  const openersToClosers = {
    '(': ')',
    '[': ']',
    '{': '}'
  };

  const openers = new Set(['(', '[', '{']);
  const closers = new Set([')', ']', '}']);

  const openersStack = [];

  for (let i = 0; i < code.length; i++) {
    const char = code.charAt(i);

    if (openers.has(char)) {
      openersStack.push(char);
    } else if (closers.has(char)) {
      if (!openersStack.length) {
        return false;
      }
      const lastUnclosedOpener = openersStack.pop();

      // if this closer doesn't correspond to the most recently 
      // seen unclosed opener, short-circuit, returning false
      if (openersToClosers[lastUnclosedOpener] !== char) {
        return false;
      }
    }
  }
  return openersStack.length === 0;
}

