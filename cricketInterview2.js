// The input nums is supposed to be an array of unique integers ranging from 1 to nums.length (inclusive). However, there is a mistake: one of the numbers in the array is duplicated, which means another number is missing.

// Find and return the sum of the duplicated number and the missing number.

// Example: in the array [4, 3, 3, 1], 3 is present twice and 2 is missing, so 3 + 2 = 5 should be returned.

function find_mistake(nums) {
  let total = 0
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        total += nums[i]
      } 
    }
  }
}
