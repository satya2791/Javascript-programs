// Program to check if a number is Even or Odd number
// Ask the user to enter a number
let n = Number(prompt("Enter a number: "));
// Check if the input is a valid number
if (isNaN(n)) {
    console.log("Please enter a vaild number.");
// Check if the number is even
} else if (n % 2 == 0) {
    console.log("It is Even Number.")
// Check if the number is odd
} else {
    console.log("It is Odd Number.")
}