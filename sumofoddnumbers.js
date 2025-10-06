// Program to find the sum of odd numbers from 1 to n
// Initialize n and sum
let n = 50;
let sum = 0;
let i = 0;
// Loop from 1 to n and add odd numbers to sum
while (i <= n) {
    if (i % 2 != 0) {
        sum = sum + i;
    }
    // Increment i
    i++;
}
// Print the result
console.log(`The sum of odd numbers from 1 to ${n} is: ${sum}`);