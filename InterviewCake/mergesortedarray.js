// In order to win the prize for most cookies sold, my friend Alice and I are going to merge our Girl Scout Cookies orders and enter as one unit.

// Each order is represented by an "order id" (an integer).

// We have our lists of orders sorted numerically already, in arrays. Write a function to merge our arrays of orders into one sorted array.

// For example:

  const myArray = [3, 4, 6, 10, 11, 15];
const alicesArray = [1, 5, 8, 12, 14, 19];

// We could simply concatenate (join together) the two arrays into one, then sort the result:

const mergeArraysConcat = (myArr, aliceArr) => {
  const mergedArr = myArr.concat(aliceArr);
  return mergedArray.sort((a, b) => a - b);
}

// O(n log n),  where n is the total length of our output array (the sum of the lengths of our inputs).

// We can do better. With this algorithm, we're not really taking advantage of the fact that the input arrays are themselves already sorted. How can we save time by using this fact?

const mergeArrays = (myArray, aliceArray) => {
  const mergedArray = [];

  let currentIndexAlices = 0;
  let currentIndexMine = 0;
  let currentIndexMerged = 0;
  
  // until we've merged all the items
  while (currentIndexMerged < (myArray.length + aliceArray.length)) {

    const isMyArrayExhausted = currentIndexMine >= myArray.length;
    const isAlicesArrayExhausted = currentIndexAlices >= alicesArray.length;

    // Case: next comes from my array
    // My array must not be exhausted, and EITHER:
    // 1) Alice's array IS exhausted, or
    // 2) The current element in my array is less 
    // than the current element in Alice's array
    if (!isMyArrayExhausted && (isAlicesArrayExhausted || (myArray[currentIndexMine] < alicesArray[currentIndexAlices]))) {
      
    } else {
      // Case: next comes from Alice's array
      mergedArray[currentIndexMerged] = alicesArray[currentIndexAlices];
      currentIndexAlices++;
  } 

    currentIndexMerged++;
  }
  
  return mergedArray;
}

// O(n) time and O(n) additional space, where nn is the number of items in the merged array.

console.log(mergeArrays(myArray, alicesArray));
// logs [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19]