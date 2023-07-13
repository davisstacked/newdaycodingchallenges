// given 2 strings, write a function to determine if the 2nd string is an anagram of the first

// see if every letter in the first string, also appears in the second string the same number of times. 
// check if their lengths are equal. if not, then we know it's not an anagram and can return.
// create an object that has the frequency each letter in string 1 and a second object with all the frequencies of letters in string 2. 
//loop over the 

const anagram = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }

  str1Letters = {};
  str2Letters = {};

  for (let char of str1) {
    str1Letters[char] = (str1Letters[char] || 0) + 1;
  }

  for (let char of str2) {
    str2Letters[char] = (str2Letter[char] || 0) + 1;
  }

  for (let key in str1Letters) {
    if (str1Letters[key] !== str2Letters[key]) {
      return false;
    }
  }
  return true;
}