// You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

// Return the merged string.

const mergeStrings = (word1, word2) => {
    let ptr1 = 0;
    let ptr2 = 0;
    let merged = '';

    while (ptr1 < word1.length || ptr2 < word2.length) {
      if (ptr1.length < word1.length) {
        merged += word1[ptr1];
        ptr1++;
      }

      if (ptr2.length < word2.length) {
        merged += word2[ptr2];
        ptr2++;
      }
    }

    merged += word1.slice(ptr1) + word2.slice(ptr2);
    return merged;
  };

// To solve this LeetCode problem, you can follow these steps:

// Initialize two pointers, one for each string, pointing to the beginning of each string. Let's call these pointers ptr1 and ptr2.

// Initialize an empty string, let's call it merged.

// Use a loop to iterate while either ptr1 or ptr2 is still within the respective string's length.

// Inside the loop, append the character at ptr1 to the merged string and increment ptr1 by 1.

// Check if ptr2 is still within the length of word2. If it is, append the character at ptr2 to the merged string and increment ptr2 by 1.

// Repeat steps 4 and 5 until both ptr1 and ptr2 are out of bounds of their respective strings.

// After the loop, check if there are any remaining characters in word1 or word2. If there are, append the remaining characters to the merged string.

// Finally, return the merged string as the result.