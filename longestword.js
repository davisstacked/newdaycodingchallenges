// Have the function LongestWord(sen) take the sen parameter being passed and return the longest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty. Words may also contain numbers, for example "Hello world123 567"

// The match() method retrieves the result of matching a string against a regular expression.

function LongestWord(sen) { 
  // we use the regex match function which searches the string for the pattern and returns an array of strings it finds. this regex says to search the range a-z and numbers 0-9, the +keeps words together, and gi says to search case insensitive. g is just for upper case and i is lowercase
  const arr = sen.match(/[a-z0-9]+/gi)

// If compareFunction(a, b) returns a value > than 0, sort b before a.
// If compareFunction(a, b) returns a value < than 0, sort a before b.
// If compareFunction(a, b) returns 0, a and b are considered equal.
// this is saying sort the words from longest to shortest.
  const sorted = arr.sort((a, b) => {return b.length - a.length})

  return sorted[0];

}

console.log(LongestWord("today I went to the store 800 times with my friend Michel"))

// function LongestWord(sen) { 
//   sen=sen.replace(/[^a-zA-Z ]/ig,'')
//   words = sen.split(" ")
//   LongestWord = words[0]
//   for (i = 0; i<words.length; i ++) {
//   	if (words[i].length > LongestWord.length) {
//   	  LongestWord = words[i]	
//   	}
//   }
//  return LongestWord
// }


 
   
// // keep this function call here 
// LongestWord(readline());