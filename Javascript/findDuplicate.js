// Find a duplicate, Space Edition™.

// We have an array of integers, where:

// The integers are in the range 1...n
// The array has a length of n+1
// It follows that our array has at least one integer which appears at least twice. But it may have several duplicates, and each duplicate may appear more than twice.

// Write a function which finds an integer that appears more than once in our array. Don't modify the input! (If there are multiple duplicates, you only need to find one of them.)

// We're going to run this function on our new, super-hip MacBook Pro With Retina Display™. Thing is, the damn thing came with the RAM soldered right to the motherboard, so we can't upgrade our RAM. So we need to optimize for space!

// Solution using a set - O(n) time and O(n) space. 

const findRepeate = (numbers) => {
  const numbersSeen = new Set();
  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    if (numbersSeen.has(number)) {
      return number;
    }
    numbersSeen.add(number);
  }

  // no duplicates
  throw new Error('no duplicates!');
}
