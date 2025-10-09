// Program to guess a random number between 1 and 100
// Import the readline module to take user input
const readlines = require('readline');
// Create an interface to read input from the console.
const r1 = readlines.createInterface({
    input: process.stdin,
    output: process.stdout
});
// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;
// Function that asks the user to guess the number
function RandomNumber() {
    // Ask user for a number
    r1.question("Enter a number between 1 and 100:", function (num) {
        // Convert the input string to an integer
        const userGuess = parseInt(num);
        // If the input is not a number or out of range, ask again
        if (userGuess < randomNumber) {
            // If user's guess is lower than the random number, ask again
            console.log("Too low! Try again.");
            RandomNumber();
            // If user's guess is higher than the random number, ask again
        } else if (userGuess > randomNumber) {
            // If user's guess is higher than the random number, ask again
            console.log("Too high! Try again.");
            RandomNumber();
            // If user's guess is out of range or not a number, ask again
        } else if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
            console.log("Invalid input. Please enter a number between 1 and 100.");
            RandomNumber();
            // If user's guess is correct, congratulate and close the interface
        } else {
            console.log("Congratulations! You've guessed the number!");
            // Close the readline interface.
            r1.close();
        }
    });
}
// Call the function to start the game
RandomNumber();