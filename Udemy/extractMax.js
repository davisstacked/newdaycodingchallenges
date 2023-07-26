const extractMax = (values) => {
  if (values.length === 0) return null;

  const length = values.length - 1;
  const extractedMax = values[0]
  values[0] = values.pop;

  let index = 0;
  while (true) {
    let leftIndex = 2 * index + 1;
    let rightIndex = 2 * index + 2;
    let swapIndex = index; 

    // if we haven't gone past the heap length and leftIndex > current index
    if (leftIndex <= length && values[leftIndex] > values[index]) {
      swapIndex = leftIndex;
    }
    if (rightIndex <= length && values[rightIndex] > values[index]) {
      swapIndex = rightIndex;
    }
    // if no swaps happened, then elements in correct place - break. 
    if (swapIndex === currentIndex) break;

    [values[swapIndex], values[currentIndex]] = [values[currentIndex], values[swapIndex]];
    currentIndex = swapIndex; 
  }
  return extractedMax;
}