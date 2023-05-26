// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Can do it in one pass using a HASHMAP

const twoSum = (nums: number[], target: number) : number[] => {
    const prevMap = {};
    for (let i = 0; i < nums.length; i++) {
        let integer = nums[i];
        let diff = target - integer;
        // for in lopp iterates over object values. 
        if (diff in prevMap) {
            return [prevMap[diff], i]
        } else {
            prevMap[integer] = i;
        }
    }
}