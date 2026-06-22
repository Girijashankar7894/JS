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

    // process-2 : undefined = null = "" = false
    if(!username)
        return `Please enter a username`;
    else
        return `${username} just logged in`;
}
console.log(checkUsername(undefined));


// rest(...) operator
function funRestOperator(...value) {
    console.log(`All Product Price = ${value}`); // All Product Price = [10,20,30,40,50]
}
funRestOperator(10, 20, 30, 40, 50);

// rest(...) operator with some parameters
function funRestOperator(value1, value2, ...value3) {
    console.log(`Apple Price = ${value1}`); // Apple Price = 10 
    console.log(`Orange Price = ${value2}`); // Orange Price = 20
    console.log(`Other Fruits Price = ${value3}`); // Other Fruits Price = [30,40,50]
}
funRestOperator(10, 20, 30, 40, 50);


// pass an array as a function argument
function funPassArray(arr) {
    console.log(`arr = ${arr}`); // arr = [5,15,25,35,45]
    console.log(`arr[2] = ${arr[2]}`); // arr[2] = 25
}
funPassArray([5, 15, 25, 35, 45]);


// pass an object as a function argument
function funPassObject(obj) {
    console.log(obj); // { productName: 'water bottle', price: 149 }
    console.log(`obj.productName = ${obj.productName}`); // obj.productName = water bottle
}
funPassObject({
    productName: "water bottle",
    price: 149
});