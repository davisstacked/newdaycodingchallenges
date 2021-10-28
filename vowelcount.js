// Have the function VowelCount(str) take the str string parameter being passed and return the number of vowels the string contains (ie. "All cows eat grass and moo" would return 8). Do not count y as a vowel for this challenge.
// Examples
// Input: "hello"
// Output: 2
// Input: "coderbyte"
// Output: 3

function VowelCount(str) { 

  let vowels = /[aeiou]/gi
  let vowelArr = str.match(vowels)
  if (vowelArr === null) {
    return 0
  } else {
    return vowelArr.length
  }
}

console.log(VowelCount("when the moon hits your eye"))