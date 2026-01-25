// Number data type (integer)
let a = 24;

// Number data type (floating point)
let b = 45.5;

// String data type
let c = "satya";

// Boolean data type
let d = true;

// BigInt data type (used for very large integers)
let e = 1234567890n;

// Null represents an intentional empty value
// typeof null returns "object" (this is a known JavaScript bug)
let f = null;

// Undefined means a variable is declared but not assigned a value
let g;

// Symbol data type (used to create unique identifiers)
// Symbols cannot be implicitly converted to strings
let h = Symbol("userId");

// Array (collection of values)
// typeof array returns "object" in JavaScript
let i = [12, 23, 34];

// Object (key-value pairs)
let j = { Name: "satya", Age: 18 };

// Logging values along with their data types using typeof operator
console.log(`${a}: ${typeof a}`);
console.log(`${b}: ${typeof b}`);
console.log(`${c}: ${typeof c}`);
console.log(`${d}: ${typeof d}`);
console.log(`${e}: ${typeof e}`);
console.log(`${f}: ${typeof f}`); // object (JS bug)
console.log(`${g}: ${typeof g}`); // undefined

// Using toString() because Symbol cannot be directly used in template literals
console.log(`${h.toString()}: ${typeof h}`);

// Array and object both return "object" when using typeof
console.log(`${i}: ${typeof i}`);
console.log(`${JSON.stringify(j)}: ${typeof j}`);
