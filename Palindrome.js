// Have the function Palindrome(str) take the str parameter being passed and return the string true if the parameter is a palindrome, (the string is the same forward as it is backward) otherwise return the string false. For example: "racecar" is also "racecar" backwards. Punctuation and numbers will not be part of the string.

function Palindrome(str) { 

// g modifier: global. All matches (don't return on first match)
// i modifier: insensitive. Case insensitive match (ignores case of [a-zA-Z])
// returns an ARRAY of only the letters in the string. removes punctuation and special characters. 
  const removePunctuation = str.match(/[A-Z]/gi);
// .join creates a string from an array. we specified to separate between each character.
  const forward = removePunctuation.join("").toLowerCase();
// reverse only works for arrays. we reverse the array then turn it into a string. 
  const backward = removePunctuation.reverse().join("").toLowerCase()
   
  return backward === forward;

}

console.log(Palindrome("Never Odd or Even."))