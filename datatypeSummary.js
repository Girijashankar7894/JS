// Data Types in JavaScript are categorized into two main types: Primitive and Non-Primitive (Reference) types.

// 1. Primitive Data Types:
// - Number
// - String
// - Boolean
// - Undefined
// - Null
// - Symbol (ES6)
// - BigInt (ES2020)


// number
let num1 = 42; // A number
let num2 = 3.14; // A floating-point number

// string
let str1 = "Hello, World!"; // A string
let str2 = 'JavaScript is fun!'; // Another string 

// boolean
let isJavaScriptFun = true; // A boolean value
let isSkyGreen = false; // Another boolean value

// undefined
let undefinedValue; // A variable that has been declared but not assigned a value is undefined

// null
let nullValue = null; // A variable that has been explicitly assigned a null value

// symbol
let sym1 = Symbol("unique"); // A symbol is a unique and immutable primitive value

// bigint
let bigIntValue = 9007199254740991n; // A BigInt is a numeric primitive in JavaScript that can represent integers with arbitrary precision



// 2. Non-Primitive (Reference) Data Types:
// - Object
// - Array
// - Function


// object
let person = {
    name: "Girija",
    age: 30,
    isStudent: false
};

// array
let numbers = [1, 2, 3, 4, 5]; // An array of numbers
let fruits = ["apple", "banana", "cherry"]; // An array of strings

// function
function greet(name) {
    return "Hello, " + name + "!";
}
console.log(greet("Girija")); // Output: "Hello, Girija!"

// Summary:
// - Primitive data types are immutable and hold a single value. immutable means that their value cannot be changed after they are created. When you perform operations on primitive values, you get a new value rather than modifying the original value.
// - Non-primitive (reference) data types can hold multiple values and are mutable.mutable means that their value can be changed after they are created. When you perform operations on reference values, you are modifying the original value rather than creating a new value.
// - JavaScript is a dynamically typed language, which means that variables can hold values of any type and can change type at runtime.



// Memory:
// - In javascript their are two types of memory: Stack and Heap.

// 1. Stack Memory: Stack memory is used to store primitive data types (number, string, boolean, undefined, null, symbol, bigint) and function references. It operates in a last-in-first-out (LIFO) manner. When a variable is declared and assigned a primitive value, it is stored in the stack memory. When the variable goes out of scope, the memory allocated for it is automatically released.

// For example:
let a = 10; // 'a' is stored in stack memory
let b = a; // 'b' is also stored in stack memory, but it holds a copy of the value of 'a'
b = 20; // Changing 'b' does not affect 'a' because they are stored separately in the stack memory
console.log(a); // Output: 10
console.log(b); // Output: 20   



// 2. Heap Memory: Heap memory is used to store non-primitive (reference) data types (objects, arrays, functions). When a variable is declared and assigned a reference value, the reference (or pointer) to the actual data is stored in the stack memory, while the actual data is stored in the heap memory. When the variable goes out of scope, the reference is removed from the stack, but the data in the heap remains until it is garbage collected.

// For example:
let obj1 = { name: "Girija" }; // 'obj1' is stored in stack memory, but it holds a reference to the object in heap memory
let obj2 = obj1; // 'obj2' is also stored in stack memory, but it holds the same reference to the object in heap memory
obj2.name = "Shankar"; // Changing the 'name' property of the object through 'obj2' also changes it for 'obj1' because both variables reference the same object in heap memory
console.log(obj1.name); // Output: "Shankar"
console.log(obj2.name); // Output: "Shankar"
