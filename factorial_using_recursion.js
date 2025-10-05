// Program to find the factorial of a number using recursion
function Factorial(n) {
    // If n is 0 or 1, return 1 (base case)
    if ((n == 0) || (n == 1)) {
        return 1;
    } else {
        // Recursive case: n * factorial of (n-1)
        return n * Factorial(n - 1); // Recursive call
    }
}
// Initialize number to find the factorial
let n = 5;
// Call the function to find the factorial and print the result
console.log(`The factorial of ${n} is: ${Factorial(n)}`);