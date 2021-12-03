// Find a duplicate, Space Edition™.

// We have an array of integers, where:

// The integers are in the range 1...n
// The array has a length of n+1
// It follows that our array has at least one integer which appears at least twice. But it may have several duplicates, and each duplicate may appear more than twice.

// Write a function which finds an integer that appears more than once in our array. Don't modify the input! (If there are multiple duplicates, you only need to find one of them.)

// We're going to run this function on our new, super-hip MacBook Pro With Retina Display™. Thing is, the damn thing came with the RAM soldered right to the motherboard, so we can't upgrade our RAM. So we need to optimize for space!

// Solution using a set - O(n) time and O(n) space. 

// const findRepeat = (numbers) => {
//   const numbersSeen = new Set();
//   for (let i = 0; i < numbers.length; i++) {
//     const number = numbers[i];
//     if (numbersSeen.has(number)) {
//       return number;
//     }
//     numbersSeen.add(number);
//   }

//   // no duplicates
//   throw new Error('no duplicates!');
// }


// We can "brute force" this by taking each number in the range 1..n1..n and, for each, walking through the array to see if it appears twice.
// O(1) space and O(n^2) time. Time is high tho. 

function findRepeat(numbers) {
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

  // no duplicates 
  throw new Error('no duplicates');
}

// Solution
// Our approach is similar to a binary search, except we divide the range of possible answers in half at each step, rather than dividing the array in half.

// Find the number of integers in our input array which lie within the range 1..\frac{n}{2}1.. 
// 2
// n
// ​
//  .
// Compare that to the number of possible unique integers in the same range.
// If the number of actual integers is greater than the number of possible integers, we know there’s a duplicate in the range 1..\frac{n}{2}1.. 
// 2
// n
// ​
//  , so we iteratively use the same approach on that range.
// If the number of actual integers is not greater than the number of possible integers, we know there must be duplicate in the range \frac{n}{2} + 1..n 
// 2
// n
// ​
//  +1..n, so we iteratively use the same approach on that range.
// At some point, our range will contain just 1 integer, which will be our answer.

const findRepeat = (numbers) => {

  let floor = 1;
  let ceiling = numbers.length - 1;

  while (floor < ceiling) {

    // divide our range 1..n into an upper range and lower range
    // (such that they don't overlap)
    // lower range is floor.. midpoint
    // upper range is midpoint + 1.. ceiling
    const midpoint = Math.floor(floor + ((ceiling - floor) / 2));
    const lowerRangeFloor = floor;
    const lowerRangeCeiling = midpoint;
    const upperRangeFloor = midpoint + 1;
    const upperRangeCeiling = ceiling;
    
    const distinctPossibleIntegersInLowerRange = lowerRangeCeiling - lowerRangeFloor + 1;

    // Count number of items in lower range
    let itemsInLowerRange = 0;
    numbers.forEach(item => {

      // Is it in the lower range?
      if (item >= lowerRangeFloor && item <= lowerRangeCeiling) {
        itemsInLowerRange += 1;
      }
    });
    if (itemsInLoverRange > distinctPossibleIntegersInLowerRange) {

      // there must be a duplicate in the lower range
      // so use the same approach iteratively on that range
      floor = lowerRangeFloor;
      ceiling = lowerRangeCeiling;
    } else {
      // There must be a duplicate in the upper range
      // so use the same approach iteratively on that range
      floor = upperRangeFloor;
      ceiling = upperRangeCeiling;
    }
  }
  // floor and ceiling have converged
// we found a number that repeats! 
  return floor;
}
