let firstName = "Girija";
let MiddleName = "Shankar";
let lastName = "Mahal";

// Using template literals for string interpolation
let fullName = `${firstName} ${MiddleName} ${lastName}`;
console.log(fullName); // Output: Girija Shankar Mahal

// Using template literals for string interpolation inside console.log
console.log(`My full name is: ${fullName}`); // Output: My full name is: Girija Shankar Mahal

// Using template literals for multi-line strings
let multiLineString = `This is a multi-line string.
It can span multiple lines without needing special characters.
This makes it easier to read and write.`;
console.log(multiLineString);

// Using template literals for expressions
let a = 5;
let b = 10;
let sum = `${a} + ${b} = ${a + b}`;
console.log(sum); // Output: 5 + 10 = 15

// Using template literals for function calls
function greet(name) {
    return `Hello, ${name}!`;
}

