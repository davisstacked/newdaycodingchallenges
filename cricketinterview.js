
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

console.log(tree)