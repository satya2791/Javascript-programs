// Program to count even and odd numbers in an array
// Initialize an array of numbers
let arr = [25, 90, 78, 56, 45, 23, 89, 100, 67, 34];
// Initialize counters for even and odd numbers
let even = 0;
let odd = 0;
// Loop through the array to count even and odd numbers
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
        // If the number is even, increment the even counter
        even = even + 1;
    } else {
        // If the number is odd, increment the odd counter
        odd = odd + 1;
    }
}
// Print the counts of even and odd numbers
console.log("The count of even numbers in the array is: " + even);
console.log("The count of odd numbers in the array is: " + odd);