// QuestionsMarks(str) take the str string parameter, which will contain single digit numbers, letters, and question marks, and check if there are exactly 3 question marks between every pair of two numbers that add up to 10. If so, then your program should return the string true, otherwise it should return the string false. If there aren't any two numbers that add up to 10 in the string, then your program should return false as well.

// For example: if str is "arrb6???4xxbl5???eee5" then your program should return true because there are exactly 3 question marks between 6 and 4, and 3 question marks between 5 and 5 at the end of the string.

// This didn't end up working for me. not sure why.
// function QuestionsMarks(str) { 

//   res = false;
//   // this iterates over every character in the array
//   for (let i = 0; i < str.length; i++) {
//   // this iterates over every other character in the array, as the first loop stays on the first character
//     for (let j = i + 1; j < str.length; j++) {
// // the number() checks each one to see if it's a number. otherwise it'll return NAN. if it is a number. then we compare the next thing in the array which is also a number to see if they equal 10. 
//       if (Number(str[i]) + Number(str[j]) === 10) {
//         // if the 2 numbers equal 10 when added together then return true.
//         res = true;
//         // we create a new array that spans from the two numbers that equal 10, and then we split that array by one questionmark. The array should now have the 2 numbers in it PLUS 2 more  
//         if (str.slice(i, j).split("?").length - 1 < 3) {
//           return false;
//         }
//       }
//     }
//   }
//   return res;

// }


function QuestionMarks(str) {
  // "EASY" MY ASS! (love this comment! this is a crazy one)
  
  // create a "clean" array containing only the numbers and question marks from str
  let cleanArr = str.match(/[0-9?]/g)
  
  // iterate through the clean array and find all the pairs that add to ten.
  let pairs = [];
  for (let i = 0; i < cleanArr.length; i++) {
    // The parseInt() function parses a string argument and returns an integer
    let a = parseInt(cleanArr[i])
    for (let j = i + 1; j < cleanArr.length; j++) {
      let b = parseInt(cleanArr[j]);
      if (a + b === 10) {
        pairs.push([a, b]);
        break;
      }
    }
  }

  // search for the pairs inside the clean array and test if they have three question marks in between them. if you can find a match count it and (very important) take the series out leaving the second number in the pair because it may be the first number in the second pair.
  let matchCount = 0;
  for (let k = 0; k < pairs.length; k++) {
    let target = `${pairs[k][0]}???${pairs[k][1]}`;

    if (cleanArr.join("").indexOf(target) !== -1) {
      matchCount++;
      cleanArr.splice(cleanArr.join("").indexOf(target), 4);
    }
  }

  //you found a number of pairs (targets) and you found a number of targets with three
  //question marks in between.  They need to be the same to return true.
  return (pairs.length > 0 && matchCount === pairs.length) ? true : false;
}

console.log(QuestionMarks("acc?7??sss?3rr1??????5"))
