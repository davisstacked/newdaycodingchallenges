// Arith Geo
// Have the function ArithGeo(arr) take the array of numbers stored in arr and return the string "Arithmetic" if the sequence follows an arithmetic pattern or return "Geometric" if it follows a geometric pattern. If the sequence doesn't follow either pattern return -1. An arithmetic sequence is one where the difference between each of the numbers is consistent, where as in a geometric sequence, each term after the first is multiplied by some constant or common ratio. Arithmetic example: [2, 4, 6, 8] and Geometric example: [2, 6, 18, 54]. Negative numbers may be entered as parameters, 0 will not be entered, and no array will contain all the same elements.
// Examples
// Input: [5,10,15]
// Output: Arithmetic
const input = [2,4,16,24]
// Output: -1

function ArithGeo(arr) {
  // An arithmetic sequence is one where the difference between each of the numbers is consistent
  const isArith = arr => {
    // if the array has less than 2 numbers then it is not arithmetic or geometric.
    if (arr.length < 2) return -1;
    const difference = arr[1] - arr[0];
    for (let i = 1; i < arr.length - 1; i++) {
      if (arr[i + 1] - arr[i] !== difference) return false;
    }
    return true;
  }

  const isGeo = arr => {
    if (arr.length < 2) return -1;
    const multiplier = arr[1] / arr[0];
    for (let i = 1; i < arr.length - 1; i++) {
      if (arr[i + 1] / arr[i] !== multiplier) return false;
    }
    return true;
  }

  if (isArith(arr)) return "Arithmetic";
  else if (isGeo(arr)) return "Geometric";
  else return -1;

}
