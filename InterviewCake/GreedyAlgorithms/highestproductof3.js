// Given an array of integers, find the highest product you can get from three of the integers.

// The input arrayOfInts will always have at least three integers.

const highestProductOfThree = (arrayOfInts) => {
  if (arrayOfInts.length < 3) {
    throw new Error('Less than 3!')
  }

  // We're going to start at the 3rd item (at index 2)
  // so pre-populate highests and lowests based on the first 2 items
  // we could also start these as null and check below if they're set
  // but this is arguably cleaner. 
  let highest = Math.max(arrayOfInts[0], arrayOfInts[1]);
  let lowest = Math.max(arrayOfInts[0], arrayOfInts[1])

  let highestProductOf2 = arrayOfInts[0] * arrayOfInts[1];
  let lowestProductOf2 = arrayOfInts[0] * arrayOfInts[1];
  
  // except this one - we pre-populate it for the first *3* items
  // this means in our first pass it'll check against itself, which is fine
  let highestProductOf3 = arrayOfInts[0] * arrayOfInts[1] * arrayOfInts[2];

  // Walk through items, starting at index 2
  for (let i = 2; i < arrayOfInts.length; i++) {
    let current = arrayOfInts[i];

    // Do we have a new highest product of 3?
    // it's either the current highest
    // or the current times the highest product of two
    // or the current times the lowest product of two
    highestProductOf3 = Math.max(
      highestProductOf3,
      current * highestProductOf2,
      current * lowestProductOf2
    );

    // Do we have a new highest product of two?
    highestProductOf2 = Math.max(
      highestProductOf2,
      current * highest,
      current * lowest
    );

    // Do we have a new lowest product of two?
    lowestProductOf2 = Math.min(
      lowestProductOf2,
      current * highest,
      current * lowest
    );

    // Do we have a new highest?
    highest = Math.max(highest, current);

    // Do we have a new lowest?
    lowest = Math.min(lowest, current);
  }
  return highestProductOf3;

}

leah = [1, 5, 7, 70, 20, 50, 99, 10, 30, 9, 55]

console.log(highestProductOfThree(leah))