// Program to check if the person is eligible to vote or not
// Ask the user to enter their age
let age = Number(prompt("Enter the age: "));
// If age is 18 or above, the person is eligible to vote
if (age >= 18) {
    console.log("Your Eligible to the vote.");
// If the age is less then 18, the person is not eligible to vote
} else {
    console.log("Your not Eligible to the vote.")
}