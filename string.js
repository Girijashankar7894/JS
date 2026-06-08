// Declare JS string variable
let str = "Hello, World!";

// Declare JS string object
let strObj = new String("Hello, World!");

// Display the string variable and object
console.log(str); // Output: Hello, World!
console.log(strObj); // Output: [String: 'Hello, World!']

// Display the type of string variable and object
console.log(typeof str); // Output: string
console.log(typeof strObj); // Output: object

// String length
console.log(str.length); // Output: 13

// Slice a string
console.log(str.slice(0, 5)); // Output: Hello
console.log(str.slice(-6)); // Output: World!

// Substring method
console.log(str.substring(0, 5)); // Output: Hello
console.log(str.substring(-6)); // Output: Hello, World!

// Difference between slice and substring and which one to use
// The slice() method extracts a section of a string and returns it as a new string, without modifying the original string. It can accept negative indices to count from the end of the string.
// The substring() method also extracts a section of a string and returns it as a new string, but it does not accept negative indices. If negative indices are provided, they are treated as 0.
// In general, slice() is more versatile and is often preferred for its ability to handle negative indices, while substring() is simpler and may be used when negative indices are not needed.

// Convert to uppercase
console.log(str.toUpperCase()); // Output: HELLO, WORLD!

// Convert to lowercase
console.log(str.toLowerCase()); // Output: hello, world!

// Concatenate strings by using methods
let str1 = "Hello";
let str2 = "World";
console.log(str1.concat(", ", str2, "!")); // Output: Hello, World!

// Trim whitespace from a string
let strWithWhitespace = "   Hello, World!   ";
console.log(strWithWhitespace.trim()); // Output: Hello, World!

// Trim whitespace from the start of a string
console.log(strWithWhitespace.trimStart()); // Output: "Hello, World!   "

// Trim whitespace from the end of a string
console.log(strWithWhitespace.trimEnd()); // Output: "   Hello, World!"

// Pad a string to a certain length
let shortStr = "5";
console.log(shortStr.padStart(3, "0")); // Output: 005
console.log(shortStr.padEnd(3, "0")); // Output: 500

// Accessing characters in a string
console.log(str[0]); // Output: H
console.log(str.charAt(0)); // Output: H

// Finding ASCII code of a character
console.log(str.charCodeAt(0)); // Output: 72 (ASCII code for 'H')

// Converting ASCII code to character
console.log(String.fromCharCode(72)); // Output: H

// Split a string into an array
console.log(str.split(", ")); // Output: [ 'Hello', 'World!' ]

// Index of a substring
console.log(str.indexOf("World")); // Output: 7

// Last index of a substring
console.log(str.lastIndexOf("o")); // Output: 8

// Replace a substring
console.log(str.replace("World", "JavaScript")); // Output: Hello, JavaScript!

// Check if a string includes a substring
console.log(str.includes("World")); // Output: true

// Check if a string starts with a substring
console.log(str.startsWith("Hello")); // Output: true

// Check if a string ends with a substring
console.log(str.endsWith("!")); // Output: true

// Repeat a string
console.log(str.repeat(2)); // Output: Hello, World!Hello, World!