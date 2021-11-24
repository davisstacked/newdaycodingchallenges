// Write a function fib() that takes an integer nn and returns the nnth Fibonacci ↴ number.

// Let's say our Fibonacci series is 0-indexed and starts with 0. So:

//   fib(0);  // => 0
// fib(1);  // => 1
// fib(2);  // => 1
// fib(3);  // => 2
// fib(4);  // => 3
// ...

// recursive

// const fib = (n) => {
//   if (n === 0 || n === 1) return n;

//   return fib(n - 1) + fib(n - 2);
// }

// memoization
// class Fibonacci {
//   constructor() {
//     this.memo = {};
//   }

//   fib(n) {
//     if (n < 0) {
//       throw new Error(
//         'Index was negative. No such thing as a negative index in a series.'
//       );
//       // Base cases
//     } else if (n === 0 || n === 1) {
//       return n;
//     }

//     // See if we've already calculated this
//     if (this.memo.hasOwnProperty(n)) {
//       console.log(`grabbing memo[${n}]`);
//       return this.memo[n];
//     }

//     console.log(`computing fib(${n})`);
//     const result = this.fib(n - 1) + this.fib(n - 2);

//     // Memoize
//     this.memo[n] = result;
    
//     return result;
//   }
// }

const fib = (n) => {

  if (n < 0) {
    throw new Error(
      'Index was negative. No such thing as a negative index in a series.'
    );
  } else if (n===0 || n===1) {
    return n; 
  }

  // We'll be building the fibonacci series from the bottom up
  // So we'll need to track the previous two numbers at each step
  let prevPrev = 0; //0th fibonacci
  let prev = 1; // 1st fibonacci
  let current; // Declare current

  for (let i = 1; i < n; i++) {
    // iteration 1: current = 2nd fibonacci
    // iteration 2: current = 3rd fibonacci
    // iteration 3: current = 4th fibonacci
    // to get nth fibonacci ... do n-1 iterations.
    current = prev + prevPrev;
    prevPrev = prev;
    prev = current;
  }
  return current;
};

// O(n) time and O(1)O(1) space.