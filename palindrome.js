// Program to check if a string is a palindrome or not
// Initialize string
let string = "madam";
// Initialize bag to store the reversed string
let bag = "";
// Loop through the string in reverse order and add each character to bag
for (let i = string.length - 1; i >= 0; i--) {
    bag = bag + string[i];
}
// Check if the original string is equal to the reversed string
if (bag == string) {
    console.log(`${string} is a palindrome`);
} else {
    console.log(`${string} is not a palindrome`);
}