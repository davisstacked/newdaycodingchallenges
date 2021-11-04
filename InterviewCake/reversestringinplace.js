// Write a function that takes an array of characters and reverses the letters in place.

// We swap the first and last characters, then the second and second-to-last characters, and so on until we reach the middle.

// function reverse(arrayOfChars) {

//   let leftIndex = 0;
//   let rightIndex = arrayOfChars.length - 1;

//   while (leftIndex < rightIndex) {

//     // Swap characters
//     const temp = arrayOfChars[leftIndex];
//     arrayOfChars[leftIndex] = arrayOfChars[rightIndex];
//     arrayOfChars[rightIndex] = temp;

//     // Move towards middle
//     leftIndex++;
//     rightIndex--;
//   }
// }

function reverse(arr) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while (leftIndex < rightIndex) {

    // Swap characters
    const temp = arr[leftIndex];
    arr[leftIndex] = arr[rightIndex];
    arr[rightIndex] = temp;

    // Move towards middle
    letIndex++;
    rightIndex--;
  }
}