// Program to find the largest of three numbers
// Initialize three numbers
let a = 56;
let b = 34;
let c = 111;
// Compare the numbers and print the largest number
if (a > b && a > c) {
    console.log(`The largest number of ${a}, ${b} and ${c} is: ` + a);
} else if (b > a && b > c) {
    console.log(`The largest number of ${a}, ${b} and ${c} is: ` + b);
} else {
    console.log(`The largest number of ${a}, ${b} and ${c} is: ` + c);
}