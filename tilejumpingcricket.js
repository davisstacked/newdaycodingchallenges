// There are a number of tiles on the floor, each numbered with a different non-negative integer. Treat this set of tiles as an array. You are initially standing on the first tile. Each tile in the set represents your maximum jumping distance at that position. (For example, if you are standing on 3, you can jump up to 3 tiles forward). Find out if you can reach the last tile.

// https://towardsdatascience.com/tackling-jump-game-problems-leetcode-e0a718e7dfba

const canJump = (nums) => {
  let i = 0;
  // keep track of the maximum we can reach from that particular index.
  // E.g.: We are at index 2 and the number at index 2 is 4 so the maximum we can reach from here is index 2+4=6.
  // we keep updating max reach in each iteration
  let maxReach = 0;
  // we keep checking that the loop variable I should be less than maxReach always otherwise we are at an index which was not within our reach i.e. we cannot reach the last element. So, we break out if I exceed maxReach.
  while(i < nums.length && i <= maxReach) {
      maxReach = Math.max(i + nums[i], maxReach);
      i++;
  }
  i == nums.length ? true : false
}

// The Math.max() function returns the largest of the zero or more numbers given as input parameters, or NaN if any parameter isn't a number and can't be converted into one.