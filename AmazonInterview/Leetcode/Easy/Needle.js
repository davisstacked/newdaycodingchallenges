var strStr = function (haystack, needle) {
  const needleLength = needle.length;
  const haystackLength = haystack.length;

  if (needleLength === 0) {
    return 0;
  }

  for (let i = 0; i <= haystackLength - needleLength; i++) {
    let j;
    for (let j = 0; j < needleLength; j++) {
      if (haystack[i + j] !== needle[j]) {
        break;
      }
    }
    if (j === needleLength - 1) {
      return i;
    }
  }
  return -1;
};
