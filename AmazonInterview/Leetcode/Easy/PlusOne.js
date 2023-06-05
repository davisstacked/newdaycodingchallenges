var plusOne = function (digits) {
  const n = digits.length;
  let carry = 1;

  for (let i = n - 1; i >= 0; i--) {
    const sum = digits[i] + carry;
    if (sum < 10) {
      digits[i] = sum;
      carry = 0;
    } else {
      digits[i] = 0;
      carry = 1;
    }
  }

  if (carry === 1) {
    digits.unshift(1);
  }
  return digits;
};

function plusOne(digits) {
  const n = digits.length;
  let carry = 1;

  for (let i = n - 1; i >= 0; i--) {
    const sum = digits[i] + carry;
    if (sum < 10) {
      digits[i] = sum;
      carry = 0;
    } else {
      digits[i] = 0;
      carry = 1;
    }
  }

  if (carry === 1) {
    digits.unshift(1);
  }

  return digits;
}
