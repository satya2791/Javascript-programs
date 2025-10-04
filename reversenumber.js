// Program to reverse a number
// Initialize number
let num = 1234;
let reverse = 0;
let digit = 0;
while (num > 0) {
    // Extract the last digit of the number
    // Add the last digit to reverse after shifting the previous digits to the left
    // Remove the last digit from the number
    digit = num % 10;
    reverse = reverse * 10 + digit;
    num = Math.floor(num / 10);
}
// Print the reversed number
console.log(`The reverse of the number is ${reverse}`);