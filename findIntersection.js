// Have the function FindIntersection(strArr) read the array of strings stored in strArr which will contain 2 elements: the first element will represent a list of comma-separated numbers sorted in ascending order, the second element will represent a second list of comma-separated numbers (also sorted). Your goal is to return a comma-separated string containing the numbers that occur in elements of strArr in sorted order. If there is no intersection, return the string false.

// Uses hashtable to solve solution. Otherwise would have to use two nested loops for a big O of 0n^2 
// hashtables (objects) super helpful to avoid On^2 time complexity when making comparisons. 

function FindIntersection(strArr) { 
  // change the arrays of strings into just arrays of values to make values easier to compare
  // .split turns strings into arrays of values based on what separated indicated. this one will split based on , and removes the spaces.
  const lists = strArr.map(str => str.split(", "));
  firstList = lists[0];
  secondList = lists[1];

  let matchMap = {};
  let resultArr = [];

  firstList.forEach(num => matchMap[num] = true);
  secondList.forEach(num => {
    if (matchMap[num]) {
      // the push method adds one or more elements to the end of an array and returns the new length of the array
      resultArr.push(num)
    }
  })
// the join method creates and returns a new string by concatenating all of the elements in an array, separated by commas or a specified separator string. 
  const answer = resultArr.length > 0 ? resultArr.join(", ") : false
  
  return answer;

}

console.log(FindIntersection(["1, 3, 9, 10, 17, 18", "1, 4, 9, 10"]))

// Input: ["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]
// Output: 1,4,13

// Line 8 gives us a time complexity of 0(2*n) since we assume that the strArr will contain only 2 elements and n represents how many numbers are stored in each list. 
// Another way to approach this to avoid the nesting of two loops and guarantee linear time complexity even if the number of elements in strArr were to increase would be to remove the need for mapping by replacing lines 8-10 with:

// const firstList = strArr[0].split(", ");
// const secondList = strArr[1].split(", ");