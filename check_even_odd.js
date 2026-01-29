// Program that tells whether the number is Positive, Negative, or Zero

// Ask the user to enter a number
let n = Number(prompt("Enter a number: "));

// If number is greater than 0, print Positive
if (n > 0) {
  console.log(`The number ${n} is a Positive number.`);

// If number is less than 0, print Negative
} else if (n < 0) {
  console.log(`The number ${n} is a Negative number.`);

// Otherwise, the number is Zero
} else {
  console.log(`The number ${n} is Zero.`);
}
