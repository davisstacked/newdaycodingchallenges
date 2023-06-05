function addDigits(num) {
  while (num >= 10) {
    let numStr = num.toString();
    let totalSum = 0;
    for (let i = 0; i < numStr.length; i++) {
      totalSum += parseInt(numStr.charAt(i));
    }
    num = totalSum;
  }
  return num;
}

var addDigits = function (num) {
  while (num >= 10) {
    let total = 0;
    let numStr = num.toString();
    for (let i = 0; i < numStr.length; i++) {
      total += parseInt(numStr.charAt[i]);
    }
    num = total;
  }
  return num;
};