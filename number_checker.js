// Import the readline module to read input from the console
const readline = require('readline');
// Create an interface to read from standard input and output
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// Ask the user to enter a number
r1.question("Enter a number: ", function (input) {
    // Convert the user input into a integer
    const number = parseInt(input);
    // check if the input is NOT a number
    if (isNaN(number)) {
        console.log("This is not a number.");
        // check if the number is less then 0
    } else if (number < 0) {
        console.log("This is a negative number.");
        // check if the number is greater then 0
    } else if (number > 0) {
        console.log("This is a positive number.");
        // check if the numbeer is 0
    } else {
        console.log("This is zero.");
    }
    // close the readline interface to end the program
    r1.close();
});