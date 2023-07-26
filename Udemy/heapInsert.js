const heapInsert = (values, val) => {
  values.push(val);
  let index = values.length - 1;
  while (index > 0) {
    let parentIndex = Math.floor((index - 1) / 2);
    if (values[index] > values[parentIndex]) {
      [values[index], values[parentIndex]] = [values[parentIndex], values[index]]
      index = parentIndex;
    } else break 
    
  }
  return values;
}