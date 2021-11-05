// Write an efficient function that checks whether any permutation ↴ of an input string is a palindrome. ↴

// You can assume the input string only contains lowercase letters.

// Examples:

// "civic" should return true
// "ivicc" should return true
// "civil" should return false
// "livci" should return false

const hasPalindromePermutation = (theString) => {
  
  // track characters we've seen an odd number of times
  const unpairedCharacters = new Set();

  for (let char of theString) {
    if (unpairedCharacters.has(char)) {
      unpairedCharacters.delete(char);
    } else {
      unpairedCharacters.add(char);
    }
  }

  // The string is a palindrome permutation if it has one or zero characters without a pair
  return unpairedCharacters.size <= 1;
}

// O(n) time complexity and O(n) space complexity 

// Our unpairedCharacters set is the only thing taking up non-constant space. We could say our space cost is O(n) as well, since the set of unique characters is less than or equal to nn. But we can also look at it this way: there are only so many different characters. How many? The ASCII character set has just 128 different characters (standard english letters and punctuation), while Unicode has 110,000 (supporting several languages and some icons/symbols). We might want to treat our number of possible characters in our character set as another variable kk and say our space complexity is O(k). Or we might want to just treat it as a constant, and say our space complexity is O(1).