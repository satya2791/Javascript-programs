// Program to find the sum of first n natural numbers
// Initialize n
let n = 100;
// Initialize result to store the sum
let result = 0;
// Loop through 1 to n and add each number to result
for (let i = 0; i <= n; i++) {
    result = result + i;
}
// Print the result
console.log(`The sum of first ${n} natural numbers is: ` + result);