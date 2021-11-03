// In merge sort, the idea is to divide the array in half, sort the two halves, and then merge the two sorted halves into one sorted whole. But how do we sort the two halves? Well, we divide them in half, sort them, and merge the sorted halves...and so on.

function mergeSort(arrayToSort) {
  // Base Case: arrays with fewer than 2 elements are sorted
  if (arrayToSort.length < 2) {
    return arrayToSort;
  }

  // STEP ONE: divide the array in half
  // we need to round down to avoid getting a "half index"
  const midIndex = Math.floor(arrayToSort.length/2)

  const left = arrayToSort.slice(0, midIndex);
  const right = arrayToSort.slice(midIndex);

  // STEP TWO: sort each half
  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  // STEP THREE: merge the sorted halves
  const sortedArray = [];
  let currentLeftIndex = 0;
  let currentRightIndex = 0;

  while (sortedArray.length < left.length + right.length) {

    // sortedLeft's first element comes next
    // if it's less than sortedRight's first element 
    // or if sortedRight is exhausted.
    if (currentLeftIndex < left.length &&
      (currentRightIndex === right.length ||
        sortedLeft[currentLeftIndex] < sortedRight[currentRightIndex])) {
      sortedArray.push(sortedLeft[currentLeftIndex]);
      currentLeftIndex += 1;
    } else {
      sortedArray.push(sortedRight[currentRightIndex]);
      currentRightIndex += 1;
        }
  }

  return sortedArray;
}