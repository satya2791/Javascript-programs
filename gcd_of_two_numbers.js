// Program to find the GCD (Greatest Common Divisor) of two numbers
function gcd(a, b) {
    // If b is 0, return a (base case)
    if (b == 0) {
        return a;
        // Recursive case: call gcd with b and the remainder of a divided by b
    } else {
        return gcd(b, a % b);
    }
}
// Initialize two numbers to find the GCD
let a = 64;
let b = 16;
// Call the function to find the GCD and print the result
console.log(`The GCD of ${a} and ${b} is: ${gcd(a, b)}`);