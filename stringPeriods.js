// String Periods
// Have the function StringPeriods(str) take the str parameter being passed and determine if there is some substring K that can be repeated N > 1 times to produce the input string exactly as it appears. Your program should return the longest substring K, and if there is none it should return the string -1.

// For example: if str is "abcababcababcab" then your program should return abcab because that is the longest substring that is repeated 3 times to create the final string. Another example: if str is "abababababab" then your program should return ababab because it is the longest substring. If the input string contains only a single character, your program should return the string -1.
// Examples
// Input: "abcxabc"
// Output: -1
// Input: "affedaaffed"
// Output: -1

const StringPeriods = (str) => {
  let current = str[0];
  let substrings = [];

  if (str.length === 1) return -1;

  for (let i = 1; i < str.length; i++) {
    // with every iteration, add the next letter onto current.
    current += str[i];
    // then compare the current iterations string and find all examples of this substring in string and join it into a string. 
    let reg = new RegExp(current, "g");
    let matches = str.match(reg).join('');
    // then compare the new string to our original string and if it matches then add that substring to the substring array
    if (matches === str) {
      substrings.push(current)
    }
  }
  if (substrings.length === 1) {
    return -1
  } else {
    // only return the second from last element in the substring. because it will also match the full string and potentially shorter strings that also match. so we only want the second from last element. ie substrings = ['abcd', "abcdabcdabcdabcdabcd"]
    return substrings[substrings.length-2]
  }
}

let string = "abcdabcdabcdabcdabcd"

console.log(StringPeriods(string))