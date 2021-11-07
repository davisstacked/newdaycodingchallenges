// You have an array of integers, and for each index you want to find the product of every integer except the integer at that index.

// Write a function getProductsOfAllIntsExceptAtIndex() that takes an array of integers and returns an array of the products.

// For example, given:

//   [1, 7, 3, 4]

// JavaScript
// your function would return:

//   [84, 12, 28, 21]

// JavaScript
// by calculating:

//   [7 * 3 * 4,  1 * 3 * 4,  1 * 7 * 4,  1 * 7 * 3]

// JavaScript
// Here's the catch: You can't use division in your solution!

const getProductsOfAllIntsExceptAtIndex = (intArray) => {
  if (intArray.length < 2) {
    throw new Error('Getting the product of numbers at other indices requires at least 2 numbers')
  }

  const productsOfAllIntsExceptAtIndex = [];

  // For each integer, we find the product of all the integers 
  // before it, storing the total product so far each time
  let productSoFar = 1;
  for (let i = 0; i < intArray.length; i++) {
    productsOfAllIntsExceptAtIndex[i] = productSoFar;
    productSoFar *= intArray[i];
  }

  // For each integer, we find the product of all the integers after it.
  // since each index in products already has the
  // product of all the integers before it, now we're storing
  // the total product of all other integers
  productSoFar = 1;
  for (let j = intArray.length - 1; j >= 0; j--) {
    productsOfAllIntsExceptAtIndex[j] *= productSoFar;
    productSoFar *= intArray[j];
  }

  return productsOfAllIntsExceptAtIndex;
}

const leah = [1, 4, 5, 7, 44, 6, 77, 9]

console.log(getProductsOfAllIntsExceptAtIndex(leah))

// O(n) time and 0(n) space complexity. 