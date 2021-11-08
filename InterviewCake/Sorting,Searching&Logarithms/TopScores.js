// You created a game that is more popular than Angry Birds.

// Each round, players receive a score between 0 and 100, which you use to rank them from highest to lowest. So far you're using an algorithm that sorts in O(n\lg{n})O(nlgn) time, but players are complaining that their rankings aren't updated fast enough. You need a faster sorting algorithm.

// Write a function that takes:

// an array of unsortedScores
// the highestPossibleScore in the game
// and returns a sorted array of scores in less than O(n\lg{n})O(nlgn) time.

// For example:

  const unsortedScores = [37, 89, 41, 65, 91, 53];
const HIGHEST_POSSIBLE_SCORE = 100;

// sortScores(unsortedScores, HIGHEST_POSSIBLE_SCORE);
// // returns [91, 89, 65, 53, 41, 37]

// JavaScript
// We’re defining nn as the number of unsortedScores because we’re expecting the number of players to keep climbing.

// And, we'll treat highestPossibleScore as a constant instead of factoring it into our big O time and space costs because the highest possible score isn’t going to change. Even if we do redesign the game a little, the scores will stay around the same order of magnitude.

// ==========================================================

// Counting is a common pattern in time-saving algorithms. It can often get you O(n) runtime, but at the expense of adding O(n) space.

// const counts = {};
// array.forEach(item => {
//   if (counts.hasOwnProperty(item)) {
//     counts[item] += 1;
//   } else {
//     counts[item] = 1;
//   }
// });

// Solution
// we use counting sort

function sortScores(unorderedScores, highestPossibleScore) {

  // Array of 0s at indices 0..highestPossibleScore
  const scoreCounts = new Array(highestPossibleScore + 1).fill(0);
 
  // Populate scoreCounts
  // this add a 1 (or larger number) to each index that is the matching score. aka score 80 will put a 1 value at index 80.
  unorderedScores.forEach(score => {
    scoreCounts[score]++;
  });

  // Populate the final sorted array
  const sortedScores = [];

  // For each item in scoreCounts
  // we're ordering scores from highest to lowest
  for (let score = highestPossibleScore; score >= 0; score--) {
    const count = scoreCounts[score]; //(this is only ever 0 or 1)
    
    // For the number of times the item occurs
    // this will run anew with every index until we hit a value. when we hit a value we push it to the sorted scores array.
    for (let time = 0; time < count; time++) {
      sortedScores.push(score);
    }
  }

  return sortedScores;
}

console.log(sortScores(unsortedScores, HIGHEST_POSSIBLE_SCORE))

// // O(n) time and O(n) space
// Wait, aren't we nesting two loops towards the bottom? So shouldn't it be O(n^2) time? 

// Notice what those loops iterate over.The outer loop runs once for each unique number in the array. The inner loop runs once for each time that number occurred.
  
//   So in essence we're just looping through the n numbers from our input array, except we're splitting it into two steps: (1) each unique number, and (2) each time that number appeared.
  
//   Here's another way to think about it: in each iteration of our two nested loops, we append one item to sortedScores. How many numbers end up in sortedScores in the end? Exactly how many were in our input array! n.