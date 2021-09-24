// Have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order. For example: if the input string is "Hello World and Coders" then your program should return the string sredoC dna dlroW olleH.

function FirstReverse(str) { 
  return str
    // makes the string into an array separated between each character
    .split('')
    // reverses the array we just made
    .reverse()
    // turns the array into a string again - combining at each character.
    .join('')
}

// Other solution
function FirstReverse(str) {
  let reverse = "";
  // iterating over the string as many times as there are letters.
  for (let i = 1; i <= str.length; i++) {
  // for each iteration, we start at the end of the array and add whatever element we find there to our new string.
    reverse += str[str.length - i];
  }
  return reverse;
}

// The length property of an array is always one larger than the index of the highest element defined in the array

// Methods Used
// split() - divides a string into an ordered list of substrings, puts these substrings into an array and returns the array. the division is done by searching for a pattern; where the pattern provided as the first parameter is the method’s call.

// .reverse() reverses an array in place. The first element becomes the last, and the last element becomes the first. 

//  join() method creates and returns a new string by concatenating all of the elements in an array, separatated by commas or a specific separator string. if the array has only one item then that item will be returned without using the separator. 