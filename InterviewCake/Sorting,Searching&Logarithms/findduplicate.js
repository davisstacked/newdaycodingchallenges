// Find a duplicate, Space Edition™.

// We have an array of integers, where:

// The integers are in the range 1...n
// The array has a length of n+1
// It follows that our array has at least one integer which appears at least twice. But it may have several duplicates, and each duplicate may appear more than twice.

// Write a function which finds an integer that appears more than once in our array. Don't modify the input! (If there are multiple duplicates, you only need to find one of them.)

// We're going to run this function on our new, super-hip MacBook Pro With Retina Display™. Thing is, the damn thing came with the RAM soldered right to the motherboard, so we can't upgrade our RAM. So we need to optimize for space!

// a solution which is not optimized for space
// O(n) time and O(n) space
const findRepeat = (numbers) => {
  const numbersSeen = new Set();

  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    if (numbersSeen.has(number)) {
      return number;
    }
    numbersSeen.add(number);
  }
  // Whoops -- no duplicate
  throw new Error('no duplicate!');
}

// Brute force approach - optimizes space but not time O(n^2) time and O(1) space

const findRepeat = (number) => {
  for (let needle = 1; needle < numbers.length; needle++) {
    let hasBeenSeen = false;

    for (let i = 0; i < numbers.length; i++) {
      const number = numbers[i];
      if (number === needle) {
        if (hasBeenSeen) {
          return number;
        } else {
          hasBeenSeen = true;
        }
      }
    }
  }
  throw new Error('no duplicate!')
}


// Solution

const findRepeat = (numbers) => {
  let floor = 1;
  let ceiling = numbers.length - 1;

  while (floor < ceiling) {

    // divide our range 1..n into an upper range and lower range
    // (such that they don't overlap)
    // lower range is floor.. midpoint
    // upper range is midpoint+1..ceiling
    const midpoint = Math.floor(floor + ((ceiling - floor) / 2));
    const lowerRangeFloor = floor;
    const lowerRangeCeiling = midpoint;
    const upperRangeFloor = midpoint + 1;
    const upperRangeCeiling = ceiling;

    const distinctPossibleIntegersInLowerRange = lowerRangeCeiling - lowerRangeFloor + 1;

    // Count number of items in lower range
    let itemsInLowerRange = 0;
    numbers.forEach(item => {

      // is it in the lower range?
      if (item >= lowerRangeFloor && item <= lowerRangeCeiling) {
        itemsInLowerRange += 1;
      }

    });

    if (itemsInLowerRange > distinctPossibleIntegersInLowerRange) {

      // there must be a duplicate in the lower range
      // so we use the same approach iteratively on that range
      floor = lowerRangeFloor;
      ceiling = lowerRangeCeiling;
    } else {
      // there must be a duplicate in the upper range
      // so we use the same approach iteratively on that range
      floor = upperRangeFloor;
      ceiling = upperRangeCeiling;
    }
  }

  // Floor and ceiling have converged
  // we have found a number that repeats!
  return floor;
}

// O(1) space and O(n lg n) 