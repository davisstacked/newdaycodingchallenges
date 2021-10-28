// Letter Capitalize
// Have the function LetterCapitalize(str) take the str parameter being passed and capitalize the first letter of each word. Words will be separated by only one space.
// Examples
// Input: "hello world"
// Output: Hello World
// Input: "i ran there"
// Output: I Ran There

function LetterCapitalize(str) { 
  // let arr = str.split(' ');
  // return arr;
  // \b is the beginning or end of a word. if beginning. put \b + what youre searching. if end put what you're searching + \b
  // \w is the global search for word characters
  return str.replace(/\b\w/g, ch => ch.toUpperCase());
}

function LetterCapitalizeTwo(str) {
  let words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  return words.join(' ')
}

console.log(LetterCapitalizeTwo('today i went to the store'))