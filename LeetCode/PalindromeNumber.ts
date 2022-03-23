// Given an integer x, return true if x is palindrome integer.

// An integer is a palindrome when it reads the same backward as forward.

// For example, 121 is a palindrome while 123 is not.
 

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.

function isPalindrome(x: number): boolean {
    // negative numbers can't be palindromes 
    // because of the negative sign in the front.
    if (x < 0) {
        return false;
    }
    return x === reversedInteger(x);
};

const reversedInteger = (x: number): number => {
    let reversed = 0;

    while (x > 0) {
        reversed = (reversed * 10) + (x % 10);
        x = Math.floor(x / 10);
    }
    return reversed;
}