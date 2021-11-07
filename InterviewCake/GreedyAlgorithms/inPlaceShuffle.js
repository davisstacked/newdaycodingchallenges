// Write a function for doing an in-place ↴ shuffle of an array.

// The shuffle must be "uniform," meaning each item in the original array must have the same probability of ending up in each spot in the final array.

// Assume that you have a function getRandom(floor, ceiling) for getting a random integer that is >= floor and <= ceiling.

// Solution
// We choose a random item to move to the first index, then we choose a random other item to move to the second index, etc. We "place" an item in an index by swapping it with the item currently at that index.

// Crucially, once an item is placed at an index it can't be moved. So for the first index, we choose from nn items, for the second index we choose from n-1n−1 items, etc.

const getRandom = (floor, ceiling) => {
  return Math.floor(Math.random() * (ceiling - floor + 1)) + floor;
}

const shuffle = (array) => {

  // If it's 1 or 0 items, just return
  if (array.length <= 1) return;

  // Walk through from beginning to end
  for (let i = 0; i < array.length - 1; i++) {

    // Choose a random not-yet-placed item to place there
    // (could also be the item currently in that spot)
    // must be an item AFTER the current item, because the stuff
    // before has all already been placed 
    const randomChoiceIndex = getRandom(i, array.length - 1);

    // place our random choice in the spot by swapping
    if (randomChoiceIndex !== i) {
      // SWAP!
      const valueAtIndexWeChoseFor = array[i];
      array[i] = array[randomChoiceIndex];
      array[randomChoiceIndex] = valueAtIndexWeChoseFor
    }
  }
}

// This is a semi-famous algorithm known as the Fisher-Yates shuffle (sometimes called the Knuth shuffle).

// O(n) time and 0(1) space.