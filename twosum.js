// Two Sum
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice. 

// You can return the answer in any order 

// example 1
// input: nums = [2, 7, 11, 15], target = 9
// output: [0, 1]
// Output: because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

// The Object.entries() method returns an array of a given object's own enumerable string-keyed property [key, value] pairs. This is the same as iterating with a for...in loop, except that a for...in loop enumerates properties in the prototype chain as well.

let leah = [2, 5, 6, 20, 30, 40, 9]

const twoSum = (nums, target) => {
  let storage = {};

  for (let [i, num] of nums.entries()) {
    if (storage[num] !== undefined) return [storage[num], i];
    storage[target - num] = i;
  }
};

console.log(twoSum(leah, 70))
// example
// [2, 7, 11, 15]
// index = 1
// num = 7
// storage = {
//   '7': 0,
// }