// ANAGRAMS

// given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the leters of another such as cinema formed from iceman. 

// Input: two strings
// Output: Boolean value True (if anagram) False (if not anagram)

//  Check that every letter in the first string exists in the second string the same number of times. 

// Are there uppercase letters? Are there spaces or symbols? 

const anagram = (str1, str2) => {
  // Check if the two strings are the same length. If not then return false.
  if (str1.length !== str2.length) return false;
  // Count how many times each value appears in the first string using an object. 
  // Count how many times each value appears in the second string using an object.
  // Compare the objects - is each key in the first object a key in the second? if not, return false.
  // Compare the objects - is each key:value in the first object a key:value in the second? if not return false.
}