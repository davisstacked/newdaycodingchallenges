// Memoization ensures that a function doesn't run for the same inputs more than once by keeping a record of the results for the given inputs (usually in an object).

// For example, a simple recursive function for computing the nth Fibonacci number:

const fib = (n) => {
  if (n < 0) {
    throw new Error(
      'Index was negative. No such thing as a negative index in the series.'
    );
  }

  // Base cases
  if (n === 0 || n === 1) {
    return n;
  }

  console.log(`computing fib(${n})`);
  return fib(n - 1) + fib(n - 2);
}

// Now with memoization. 

class Fibonacci {
  
  constructor() {
    this.memo = {};
  }

  fib(n) {
    if (n < 0) {
      throw new Error(
        'Index was negative. No such thing as a negative index in a series.'
      );
      // Base cases
    } else if (n === 0 || n === 1) {
      return n;
    }

    // See if we've already calculated this
    if (this.memo.hasOwnProperty(n)) {
    console.log(`grabbing memo[${n}]`);
    return this.memo[n];
    }

    console.log(`computing fib(${n})`);
    const result = this.fib(n - 1) + this.fib(n - 2);

    // Memoize
    this.memo[n] = result;

    return result;
  }

}

