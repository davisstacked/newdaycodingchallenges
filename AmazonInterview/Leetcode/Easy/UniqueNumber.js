var uniqueOccurrences = function (arr) {
  const integers = {};

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    if (integers[num]) {
      integers[num]++;
    } else {
      integers[num] = 1;
    }
  }

  const counts = Object.values(integers);
  const countSet = new Set(counts);
  return counts === countSet;
};

function uniqueOccurrences(arr) {
  const occurrences = {};

  // Count occurrences of each value
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    if (occurrences[num]) {
      occurrences[num]++;
    } else {
      occurrences[num] = 1;
    }
  }

  const counts = Object.values(occurrences);
  const uniqueCounts = new Set(counts);

  return counts.length === uniqueCounts.size;
}
