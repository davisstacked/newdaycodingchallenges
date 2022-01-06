// I like parentheticals (a lot).

// "Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing."

// Write a function that, given a sentence like the one above, along with the position of an opening parenthesis, finds the corresponding closing parenthesis.

// Example: if the example string above is input with the number 10 (position of the first parenthesis), the output should be 79 (position of the last parenthesis).

// if there's not another opening parenthesis before you reach the last parentheses, return the position of the next closing parenthesis.

// Solution
// We simply walk through the string, starting at our input opening parenthesis position. As we iterate, we keep a count of how many additional "(" we find as openNestedParens. When we find a ")" we decrement openNestedParens. If we find a ")" and openNestedParens is 0, we know that ")" closes our initial "(", so we return its position.


function getClosingParen(sentence, openingParenIndex) {
  let openNestedParens = 0;

  for (let position = openingParenIndex + 1; position < sentence.length; position++) {
    const char = sentence[position];

    if (char === '(') {
      openNestedParens += 1;
    } else if (char === ')') {
      if (openNestedParens === 0) {
        return position;
      }
      openNestedParens -= 1;
    }
  }
  throw new Error('No closing parenthesis :(');
}
