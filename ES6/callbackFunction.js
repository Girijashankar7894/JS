"use strict"

// create function
function sayHi() { console.log("Hi..."); }
function sayBey() { console.log("Bey..."); }

// call a function as a function parameter
function sumOfTwoNumber(value1, value2, fun) {
    let output = value1 + value2;
    console.log(`${value1} + ${value2} = ${output}`);

    // call callback function
    fun();
}

// pass a function as an argument
sumOfTwoNumber(75, 83, sayHi);
sumOfTwoNumber(57, 38, sayBey);