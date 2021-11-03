function binarySearch(target, nums) {
  // See if target appears in nums

  // We think of floorIndex and ceilingIndex as "walls" around the possible positions of our target 
  // so by -1 below we mean to start our wall "to the left" of the 0th index. (we don't mean the last index)
  let floorIndex = -1;
  let ceilingIndex = nums.length;

  // if there isn't at least 1 index between floor and ceiling, we've run out of guesses and the number must not be present. 
  while (floorIndex + 1 < ceilingIndex) {

    // find the index halfway between floor and ceiling
    // we have to round down to avoid getting a "half index"
    const distance = ceilingIndex - floorIndex;
    const halfDistance = Math.floor(distance / 2);
    const guessIndex = floorIndex + halfDistance;

    const guessValue = nums[guessIndex];

    if (guessValue === target) {
      return true;
    }

    if (guessValue > target) {
      // Target is to the left, so move ceiling to the left
      ceilingIndex = guessIndex;
    } else {
      // target is to the right, so move floor to the right
      floorIndex = guessIndex;
    }
  }
  return false;
}
// Sorting costs O(n log2 n)
//   That's our best runtime for comparison-based sorting. If we can tightly bound the range of possible numbers in our array, we can use a hash map do it in O(n)O(n) time with counting sort.