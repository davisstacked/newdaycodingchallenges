const selectionSort = (arr) => {

  for (let i = 0; i < arr.length; i++) {
    let smallest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[smallest] > arr[j]) {
        smallest = j;
      }
    }
    if (arr[smallest] !== arr[i]]) {
    [arr[smallest], arr[i]] = [arr[i], arr[smallest]]
    }
  }
  return arr;
}

console.log(selectionSort([4, 19, 3, 33, 8, 22]))

console.log(selectionSort([4, 19, 3, 33, 8, 22]))