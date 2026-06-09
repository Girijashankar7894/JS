"strict mode";
let number = 123;
console.log(number); // Output: 123
console.log(typeof number); // Output: number

// Conversion to string
let strNumber = number.toString(); // or strNumber = String(number);
console.log(strNumber); // Output: "123"
console.log(typeof strNumber); // Output: string

// toFixed() method
let fixedNumber = number.toFixed(2);
console.log(fixedNumber); // Output: "123.00"
console.log(typeof fixedNumber); // Output: string

// toPrecision() method
let precisionNumber = number.toPrecision(4);
console.log(precisionNumber); // Output: "123.0"
console.log(typeof precisionNumber); // Output: string

// valueOf() method
let valueOfNumber = number.valueOf();
console.log(valueOfNumber); // Output: 123
console.log(typeof valueOfNumber); // Output: number

// tolocaleString() method
let num = 1000000;

let localeString = num.toLocaleString();
console.log(localeString); // Output: "1,000,000" (may vary based on locale)
console.log(typeof localeString); // Output: string

let localeString2 = num.toLocaleString('en-IN'); // Indian locale
console.log(localeString2); // Output: "10,00,000"
console.log(typeof localeString2); // Output: string


// +++++++++++++++++++++++++++++++++++++++++ Math Object +++++++++++++++++++++++++++++++++++++++++
console.log(Math.PI); // Output: 3.141592653589793

console.log(Math.abs(-5)); // Output: 5
console.log(Math.round(4.7)); // Output: 5
console.log(Math.round(4.4)); // Output: 4
console.log(Math.ceil(4.1)); // Output: 5
console.log(Math.floor(4.9)); // Output: 4

console.log(Math.sqrt(16)); // Output: 4
console.log(Math.pow(2, 3)); // Output: 8
console.log(Math.max(1, 5, 3)); // Output: 5
console.log(Math.min(1, 5, 3)); // Output: 1
console.log(Math.random()); // Output: A random number between 0 and 1

console.log(Math.random() * 100); // Output: A random number between 0 and 100
console.log(Math.floor(Math.random() * 100)); // Output: A random integer between 0 and 99
console.log(Math.floor(Math.random() * 100) + 1); // Output: A random integer between 1 and 100

// Generating a random integer between a specific range (inclusive)
let min = 10;
let max = 20;
let randomInt = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomInt); // Output: A random integer between 10 and 20