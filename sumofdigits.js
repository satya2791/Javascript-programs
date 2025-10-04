// Program to calculate the sum of digits of a number
// Initialize number
let num = 1234;
// Check if the number is 0 or 1
if (num == 0) {
    // If the number is 0, the sum of its digits is 0
    console.log(`The sum of the digits of ${num} is 0`);
} else if (num == 1) {
    // If the number is 1, the sum of its digits is 1
    console.log(`The sum of the digits of ${num} is 1`);
    // If the number is greater than 1, calculate the sum of its digits
} else {
    let sum = 0;
    let digit = 0;
    while (num > 0) {
        // Extract the last digit of the number
        // Add the last digit to sum
        // Remove the last digit from the number
        digit = num % 10;
        sum = sum + digit;
        num = Math.floor(num / 10);
    }
    // Print the sum of the digits
    console.log(`The sum of the digits of the number is ${sum}`);
}

