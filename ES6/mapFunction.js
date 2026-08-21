"use strict"

// input - [2, 7, 3, 8, 1, 6]   output - [4, 14, 6, 16, 2, 12]


// initialize an array
const arr = [2, 7, 3, 8, 1, 6];


// Process-01: map() using anonymous function
const updatedArr1 = arr.map(function(el) {
    return el*2;
});
console.log(updatedArr1);


// Process-02: map() using arrow function
const updatedArr2 = arr.map((el) => el*2);
console.log(updatedArr2);