let numberValue = 42; // A number
let stringValue = "Hello, World!"; // A string
let emptyStringValue = ""; // An empty string
let booleanValue = true; // A boolean
let nullValue = null; // A null value
let undefinedValue; // An undefined value

console.log("Number Value: " + numberValue);
console.log("String Value: " + stringValue);
console.log("Boolean Value: " + booleanValue);
console.log("Null Value: " + nullValue);
console.log("Undefined Value: " + undefinedValue);

// Type conversion examples
let numToString = String(numberValue); // Convert number to string (will be "42")
let boolToString = String(booleanValue); // Convert boolean to string (will be "true")
let nullToString = String(nullValue); // Convert null to string (will be "null")
let undefinedToString = String(undefinedValue); // Convert undefined to string (will be "undefined")

let stringToNum = Number(stringValue); // Convert string to number (will result in NaN)
let emptyStringToNum = Number(emptyStringValue); // Convert empty string to number (will be 0)
let boolToNum = Number(booleanValue); // Convert boolean to number (true becomes 1, false becomes 0)
let nullToNum = Number(nullValue); // Convert null to number (will be 0)
let undefinedToNum = Number(undefinedValue); // Convert undefined to number (will be NaN)

let stringToBool = Boolean(stringValue); // Convert non-empty string to boolean (will be true)
let emptyStringToBool = Boolean(emptyStringValue); // Convert empty string to boolean (will be false)
let numToBool = Boolean(numberValue); // Convert non-zero number to boolean (will be true)
let nullToBool = Boolean(nullValue); // Convert null to boolean (will be false)
let undefinedToBool = Boolean(undefinedValue); // Convert undefined to boolean (will be false) 