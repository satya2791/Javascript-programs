// Program to check if a number is prime number or not
// Initialize number
let num = 9;
// Check if the number is less than or equal to 1
if ((num == 0) || (num == 1)) {
    // If the number is 0 or 1 it is neither prime nor composite
    console.log(`The given number ${num} is neither prime nor composite`);
} else {
    // If the number is greater than 1, check for factors
    for (let i = 2; i < num; i++) {
        // If the number is divisible by any number other than 1 and itself, it is not prime
        if (num % i == 0) {
            console.log(`The given number ${num} is not a prime number`);
            // If the number is found to be not prime, exit the loop
            break;
            // If the number is not divisible by any number other than 1 and itself, it is prime
        } else {
            console.log(`The given number ${num} is a prime number`);
            // If the number is found to be prime, exit the loop
            break;
        }
    }
}