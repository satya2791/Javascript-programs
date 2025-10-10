// Simple calculator that takes two numbers and an operation from user input and prints the result.
// Import the readline module to take user input
const readlines = require('readline');
// Create an interface to read input from the console.
const r1 = readlines.createInterface({
    input: process.stdin,
    output: process.stdout
});
// Ask user for two numbers and an operation.
r1.question("Enter first number:", function (number1) {
    r1.question("Enter secound number:", function (number2) {
        r1.question("Enter operation (+, -, *, /):", function (op) {
            // Convert the input strings ti integers and perform the operation.
            const num1 = parseInt(number1);
            const num2 = parseInt(number2);
            // trim whitespace from operation input
            op = op.trim();
            // Perform the operation and print the result.
            if (isNaN(num1) || isNaN(num2)) {
                console.log("Invalid number input.");
            } else if (!['+', '-', '*', '/'].includes(op)) {
                console.log("Invalid operation input.");
            } else if (op == '+') {
                console.log(`${num1} + ${num2} = ${num1 + num2}`);
            } else if (op == '-') {
                console.log(`${num1} - ${num2} = ${num1 - num2}`);
            } else if (op == '/' && num2 == 0) {
                console.log("Error : Division by zero");
            } else if (op == '/') {
                console.log(`${num1} / ${num2} = ${num1 / num2}`);
            } else {
                console.log(`${num1} * ${num2} = ${num1 * num2}`);
            }
            // Close the readline interface.
            r1.close();
        });
    });
});