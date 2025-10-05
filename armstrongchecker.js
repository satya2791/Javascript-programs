// Program to check if a number is an Armstrong number or not
function armstrongChecker(num) {
    // Initialize variables
    let sum = 0;
    let digit = 0;
    // loop through each digit of the number
    for (let i = 0; i < num; i++) {
        // Extract the last digit of the number
        digit = num % 10;
        // Add the cube of the last digit to sum
        sum = sum + (digit * digit * digit);
        // Remove the last digit from the number
        // The loop continues until all digits are processed
        num = Math.floor(num / 10);
    }
    // Check if the sum of cubes of digits is equal to the original number
    if (sum == num) {
        console.log("The number is an Armstrong number."); // If true, print that it is an Armstrong number
    } else {
        console.log("The number is not an Armstrong number."); // If false, print that it is not an Armstrong number
    }
}
// Initialize number to be checked
let num = 123;
// Call the function to check if the number is an Armstrong number
armstrongChecker(num);