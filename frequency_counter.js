// Program to count frequency of each element in a sorted array
// Initialize array and frequency object
let arr = [1, 2, 2, 3, 4, 4, 4, 5];
let freq = {};
// Initialize frequency of first element
let num = arr[0];
// Loop through the array to count frequencies
for (let i = 0; i < arr.length; i++) {
    // If the current element is the same as the previous, increment its frequency
    if (arr[i] == num) {
        freq[num]++;
        // If it's a new element, set its frequency to 1
    } else {
        num = arr[i];
        freq[num] = 1;
    }
}
// Print the frequency of each element
for (let key in freq) {
    console.log(key + " occurs " + freq[key] + " times");
}