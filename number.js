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