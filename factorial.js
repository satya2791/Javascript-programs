// Program to find the factorial of the given number
// Initialize n
let n = 45;
// Initialize fact to store the factorial value
let fact = 1;
// Loop from n to 1 and multiply each number to fact
for (let i = n; i >= 1; i--) {
    fact = fact * i;
}
// Print the factorial value
console.log(`The factorial of ${n} is: ` + fact);