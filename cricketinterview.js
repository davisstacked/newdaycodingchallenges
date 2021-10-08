
// 1/15
// function returns index of first matching element in an array
// function firstIndexOfElementInArray(element, array) {
  //   let result = -1
  
  //   for (let i = 0; i < array.length; i++) {
    //     // correct answer
    //     if (array[i] === element) { 
      //       return i
      //     }
      //   }
      
      //   return result 
      // }
      
      // console.log(firstIndexOfElementInArray('89', x))
      
// 2/15
// Select the line of code that completes the function
      
let m = [1, 2, 14, 45, 15, -7, 300, 800, 22, 15]

function addOne(num) {
  return num + 1
}

function map(array, method) {
  let resultArray = []
  
  array.forEach(element => {
    // Call the method on the object
    const value = method(element)
    // Missing line
    resultArray.push(value)
  })
  
  return resultArray
}

// console.log(map(m, addOne))


// 3/15
// sort sorts values alphabetically so this sort gets you the value -7, 1, 15, 2, 300
let x = [1, 2, 15, -7, 300, 800, 22, 15]
// let y = x.sort((a, b) => a - b)

// // a - b sorts in ascending order
// // b - a sorts in descending order 

// console.log(y)

// If compareFunction(a, b) returns a value > than 0, sort b before a.
// If compareFunction(a, b) returns a value < than 0, sort a before b.
// If compareFunction(a, b) returns 0, a and b are considered equal

// 4/15
// function recursively reverses a string
function recursiveStringReverse(string) {
  if (string.length <= 1) {
    return string
  }

  // the first letter in the string
  let firstChar = string.charAt(0)
  // the string minus the first letter of the string
  let lastChar = string.slice(1)

  // calls the function on the string, adding the first character to the end each time. 
  return recursiveStringReverse(lastChar) + firstChar
}

// console.log(recursiveStringReverse("today i went to the store"))

// 5/15
// What does the following code output?

const promises = [3, 2, 1].map(num => (
  new Promise(resolve => {
    setTimeout(() => {
      resolve(num)
    }, num * 1000)
  })
))

// Promise.race(promises).then((val) => {
//   console.log(val)
// })

// answer is 1

// 6/15

// What is the value of the variable names after the following code runs?
let names = ['Rachel', '', 'Meghana', '', '', 'Tim']

function deleteBlankItems(items) {
  for (let i = 0; i < items.length; i++) {
    if (items[i].length === 0) {
      items.splice(i, 1);
      console.log(items.length)
    }
  }

  return items;

}


console.log(deleteBlankItems(names));
// for some reason the answer is ['Rachel', 'Meghana', '', 'Tim'] I do not understand why it wouldn't delete this second empty slot and have asked on StackOverflow
// Stack overflow says that splice is modifying the array in place and so the looping is thrown off and not checking every value. just each array index once. I should use filter instead. 
// using filter
// let names = ['Rachel', '', 'Meghana', '', '', 'Tim']

// function compact(items) {
//   return items.filter(Boolean)
// }
// console.log(compact(names))

// 7/15
function func(a, b) {
  a += 1
  b.push(1)
}
const a = 0
const b = []
func(a, b)
console.log(a)

// The answer is 0 [1]
// functions cannot update numbers in the global scope because it is creating a new number object with the function.

// 8/15
// What is the value of the variable tree after the following code runs
// this is saying that each new word in the sentence should be added to the object of the first word. And it should be designated as it's own object with the name as the key, every extra word is added as a nested object. 
// variable tree!
function buildWordTreeFromSentences(sentenceList) {
  let root = {}
  sentenceList.forEach(sentence => {
    let base = root
    sentence.split(' ').forEach(word => {
      if (base[word] === undefined) {
        base[word] = {}
      }
      base = base[word]
    })
  })
  return root
}

let tree = buildWordTreeFromSentences(['Hello World', 'Hello There'])
// answer is {Hello: { word: {}, there: {}}}

// console.log(tree)

// 9/15
// what is the value of g after the following code block runs?
const f = n => n <= 1 ? 1 : n * f(n - 1);

let g = f(4);

console.log(g)

// 10/15
const words = () => {
  let words = ['Hello', 'World']
  words.forEach((word, i) => {
    (words[i] = word.split('').reverse().join('')).toLowerCase()
  })
  return words;
}

//returns['olleH', 'dlroW']

// since the toLowerCase is outside of parentheses does not do anything i guess. dont know why. 

// 11/15
// the following code attempts to detect whether an array contains positive and negative numbers in a single pass. Which test input would reveal a bug by producing incorrect output?

function hasPosNeg(array) {
  let hasPos = false
  let hasNeg = false

  array.forEach(num => {
    hasPos = num > 0
    hasNeg = num < 0
  })

  return [hasPos, hasNeg]
}

// console.log(hasPosNeg([0, -1, -2]))
// console.log(hasPosNeg([0, 1, -1, -2, -4 ]))
// console.log(hasPosNeg([]))
// console.log(hasPosNeg([0, 1, 2]))
// this is throwing an error because hasPos and hasNeg is changing based on every new value. so it is only recording what the last value is. 

// 12/15
// what does the following code do?
function _(func, items) {
  let i = 0
  for (let item of items) {
    if (func(item)) {
      items[i] = item
      i += 1
    }
  }
  items.splice(i)
}

// i believe this code filters a sequence in-place for items which satisfy a predicate

// 13/15
// What is wrong with the following code snippet

// const fs = require('fs'.promises)

// async function fileOpener(filepath) {
//   let file
//   try {
//     file = await fs.open(filepath)
//     let data = file.read()
//   } finally {
//     file.close()
//   }
// }

// The file may be read before all data is read because there is no await before file.read()

function equalone(char) {
  if (char === "a") {return true }
}

let n = ['leah', 'smitha', 'eighta']

// 14/15
// What is wrong with the following code?
function findFirstPosition(arr, fn) {
  let pos = false;
  for (let i = 0; i < arr.length; i++) {
    let row = arr[i];
    for (let j = 0; j < row.length; j++) {
      if (fn(row[j])) {
        pos = [i, j]
      }
    }
  }
  return pos;
}

console.log(findFirstPosition(n, equalone))

// which is right
// j is going to be returned incorrectly. it will always be the length of the row
// this code will return the last positiion for which fn is truthy
// this code only works for square arrays
// this code will return a position for which fn is truthy, but might not return the first occurance

// 15/15
// Given objects with name and date fields, the task is to sort the objects alphabetically by name, using most recent date as a tie-breaker. Using the provided sortBy() method, which calls to a stable sort method would implement this correctly?

function sortBy(array, prop) {
  return array.sort((a, b) => {
    if (a[prop] < b[prop]) return -1
    if (a[prop] < b[prop]) return 1

    return 0
  })
}

// sortBy(sortBy(objs, 'name'), 'date').reverse()
// sortBy(objs, ['name', 'date'])
// sortBy(sortBy(objs, 'date').reverse(), 'name')
// sortBy(objs, ['date', 'name'])

// look up order of operations 
// solve last two problems

