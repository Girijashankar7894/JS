"use strict";

// function
// function definition
function funDefinition() {
    console.log(`Function Definition`);    
}

// function call
funDefinition(); // Function Definition

// function definition with parameter
function funDefinitionWithParameter(a, b) {
    console.log(`${a} + ${b} = ${a+b}`);
};

// function call with argument
funDefinitionWithParameter(10, 20); // 10 + 20 = 30


// function return
function funReturn(c, d) {
    return (c+d);
}

// store return value and display it
const returnValue = funReturn(5, 6);
console.log(`5 + 6 = ${returnValue}`);


// set default value of a parameter
function defaultValue(username = "Computer") {
    return `Your user name is ${username}`;
}
console.log(defaultValue(""));



// Task1: Check a user is input username or not. if input the username than display a message '[username] just logged in' else display 'Please enter a username'.
function checkUsername(username) {
    // process-1
    // if(username === undefined || username === null || username === "")

    // process-2
    if(!username)
        return `Please enter a username`;
    else
        return `${username} just logged in`;
}
console.log(checkUsername(undefined));

