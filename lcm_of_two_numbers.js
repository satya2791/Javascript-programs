// Program to find the LCM of two numbers
function lcm(a, b) {
    // inner function to find GCD
    function gcd(x, y) {
        // If y is 0, return x (base case)
        if (y == 0) {
            return x;
        } else {
            // Recursive case: call gcd with y and the remainder of x divided by y
            return gcd(y, x % y);
        }
    }
    // If either number is 0, LCM is 0
    if (a == 0 || b == 0) {
        return 0;
    } else {
        // LCM formula: (a * b) / GCD(a, b)
        return (a * b) / gcd(a, b);
    }
}
// Initialize two numbers to find the LCM
let a = 12;
let b = 21;
// Call the function to find the LCM and print the result
console.log(`The LCM of ${a} and ${b} is: ${lcm(a, b)}`);