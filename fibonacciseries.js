// Program to display the Fibonacci series up to n terms
function Fibonacci(n) {
    // First two terms
    if (n == 0) {
        return 0; // First term of the Fibonacci series is 0
    } else if (n == 1) {
        return 1; // Second term of the Fibonacci series is 1
    } else {
        return Fibonacci(n - 1) + Fibonacci(n - 2); // Recursive call
    }
}
// Initialize the number of terms
let n = 9;
// Call the function to display the
Fibonacci(n);
// Print the nth term of the Fibonacci series
console.log(`The ${n}th term of the Fibonacci series is: ${Fibonacci(n)}`);