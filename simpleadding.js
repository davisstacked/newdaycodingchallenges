// Have the function SimpleAdding(num) add up all the numbers from 1 to num. For example: if the input is 4 then your program should return 10 because 1 + 2 + 3 + 4 = 10. For the test cases, the parameter num will be any number from 1 to 1000.

// recursion
function SimpleAdding(num) {
  return num === 0 ? num : num + SimpleAdding(num - 1)
}

console.log(SimpleAdding(5))

// for loop
function SimpleAddingTwo(num) {
  let res = 0;
  for (let i = 1; i <= num; i++) {
    res = res + i
  }
  return res
}

console.log(SimpleAddingTwo(5))