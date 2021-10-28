// Have the function PowersofTwo(num) take the num parameter being passed which will be an integer and return the string true if it's a power of two. If it's not return the string false. For example if the input is 16 then your program should return the string true but if the input is 22 then the output should be the string false.
// Examples
// Input: 4
// Output: true
// Input: 124
// Output: false


// Keep dividing the number by two, i.e, do n = n/2 iteratively until n becomes 1. In any iteration, if n%2 becomes non-zero and n is not 1 then n is not a power of 2. If n becomes 1 then it is a power of 2.

function PowersofTwo(num) {
  while (num > 2) {
    num = num/2
  }
  return num === 2
}

// recursive
// function PowersofTwo(num) {
//   if (num === 2) { return true; }
//   if (num % 2 !== 0) { return false; }
//   return PowersofTwo(num/2);
// }

console.log(PowersofTwo(124))