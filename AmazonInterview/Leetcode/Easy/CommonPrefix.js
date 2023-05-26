// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Define a function, let's say longestCommonPrefix, that takes in an array of strings as input.

// Check if the input array is empty. If it is, return an empty string since there can't be a common prefix among an empty array.

// Initialize a variable called prefix with an empty string. This variable will store the longest common prefix found so far.

// Iterate through the characters in the strings of the input array starting from the first character (index 0).

// For each character position, compare the character of the first string with the corresponding character of the other strings in the array. If any of the characters don't match or if you reach the end of any string, exit the loop.

// If the characters match for all strings at the current position, append the character to the prefix variable.

// After iterating through all the characters or exiting the loop, return the prefix as the longest common prefix.

const longestCommonPrefix = (strs) => {
  if (strs.length === 0) {
    return ""
  }
  let prefix = "";
  for (let i = 0; i < strs[0].length; i++) {
    let char = strs[0][i];
    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] !== char || i >= strs[j].length) {
        return prefix;
      }
    }
    prefix += char;
  }
  return prefix;
}

function longestCommonPrefix(strs) {
  if (strs.length === 0) {
    return '';
  }

  let prefix = '';
  // iterate for the length of the first string in the array
  for (let i = 0; i < strs[0].length; i++) {
    // char is the first letter in the first string in the array then each letter after in the first word. 
    const char = strs[0][i];
    // now a second loop inside the first loop. this one starts on the second string in the array.
    for (let j = 1; j < strs.length; j++) {
      // if all the letters in the first word have been gone thru already, then the prefix can't be longer than the first word, so return prefix. Or if the first letter in one of the other strings doesn't match the letters in the first word then also return. 
      if (i >= strs[j].length || strs[j][i] !== char) {
        return prefix;
      }
    }
    // otherwise add the new char to the prefix variable. 
    prefix += char;
  }

  return prefix;
}
