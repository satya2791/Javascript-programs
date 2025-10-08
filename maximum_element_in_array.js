// Program to find maximum element in an array
// Initialize an array of numbers
let arr = [1, 6, 9, 3, 2, 10];
// Assume the first element is the maximum
let max = arr[0];
// Loop through the array to find the maximum element
for (let i = 0; i < arr.length; i++) {
    // If the current element is greater than max, update max
    if (arr[i] > max) {
        max = arr[i];
    }
}
// Print the maximum element found in the array
console.log("The maximum element in the array is: " + max);