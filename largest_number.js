// Javascript program to find the largest of three numbers
// Import the readline module to take user input
const readlines = require('readline');
// Create an interface to read input from the console
const r1 = readlines.createInterface({
    input: process.stdin,
    output: process.stdout
});
// Ask the first number
r1.question("Enter the first number: ", function (num1) {
    // Ask the secound number
    r1.question("Enter the secound number:", function (num2) {
        // Ask the third number
        r1.question("Enter the third number:", function (num3) {
            // Convert the input strings to integers
            const number1 = parseInt(num1);
            const number2 = parseInt(num2);
            const number3 = parseInt(num3);
            // Compare the three numbers and find the largest
            if (number1 >= number2 && number1 >= number3) {
                console.log("The Largest number is:" + number1);
            } else if (number2 >= number1 && number2 >= number3) {
                console.log("The largest number is:" + number2);
            } else if (number3 >= number1 && number3 >= number2) {
                console.log("The Largest number is:" + number3);
            } else if (number1 == number2 && number1 == number3) {
                console.log("All numbers are equal");
            } else {
                console.log("Give valid inputs");
            }
            // Close the readline interface
            r1.close();
        });
    });
});