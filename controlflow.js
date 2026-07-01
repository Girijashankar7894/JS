"use strict";

// operator: Operators are the special symbols which perform any operation on one or more operands. operator divided into 3 parts. i.e-
// (1) unary: +, -, !.
// (2) binary: it divided into 5 sub parts. i.e-
//     1- arithmetic: +, -, *, /, %, ++, --.
//     2- assignment: =, +=, -=, *=, /=, %=, >>=, <<=, &=, ^=, |=.
//     3- relational operator: <, >, <=, >=, ==, !=, ===.
//     4- logical operator: &&, ||, !.
//     5- bitwise: &, |, ^, ~, <<, >>, >>>.
// (3) ternary: ?:.

// some additional operators
// comma(,) operator
// 




// if statement
let username = "Girija";
if (username) {
    console.log(`Welcome ${username}`);
}

// if you have single line code inside the if or else block you can write without curly bracket ({}).
if (username) console.log(`Welcome ${username}`);

// if you have multiple line code inside the if or else block you can write without curly bracket ({}) separated by comma(,) to each line. but this not a good habit for writing code at development time.
if (username) 
    console.log(`Welcome ${username}`),
    console.log("hello"),
    console.log("hii");


// if else statement
let password = "pass@123";
if (password == "pass@12") {
    console.log(`login successfully`);   
}
else {
    console.log(`incorrect password`);   
}

// check a year is leap year or not.
let yr = 1900;
if(((yr%4) === 0 && (yr%100) !== 0) || ((yr%4) === 0 && (yr%100) === 0 && (yr%400) === 0)) {   
    console.log(`${yr} is a leap year.`);
}
else {
    console.log(`${yr} is not a leap year.`);
}


// nested if
// check a year is leap year or not.
let year = 1900;
if((year%4) === 0) {
    if((year%100) === 0) {
        if ((year%400) === 0) {
            console.log(`${year} is a leap year.`);
        }
        else {
            console.log(`${year} is not a leap year.`);
        }
    }
    else {
        console.log(`${year} is a leap year.`);
    }
}
else {
    console.log(`${year} is not a leap year.`);
}


// else…if leader
// find out biggest among three number.
let num1 = 100;
let num2 = 150;
let num3 = 120;

if(num1 > num2) {
    if(num1 > num3) {
        console.log(`${num1} is greater`);
    }
    else {
        console.log(`${num3} is greater`);
    }
}

else if(num2 > num3) {
    console.log(`${num2} is greater`);
} 
else {
    console.log(`${num3} is greater`);
}


// switch statement
// 7 days in a weak
let dayNumber = 2;

switch (dayNumber) {
    case 1:
        console.log(`Monday`);
        break;
    case 2:
        console.log(`Tuesday`);
        break;
    case 3:
        console.log(`Wednesday`);
        break;
    case 4:
        console.log(`Thursday`);
        break;
    case 5:
        console.log(`Friday`);
        break;
    case 6:
        console.log(`Saturday`);
        break;
    case 7:
        console.log(`Sunday`);
        break;

    default:
        console.log(`Please enter a valid input!`);
        break;
}


// falsy values
// false, 0, -0, NaN, "", BigInt 0n, null, undefined.

// truthy values
// true, "0", "false", " ", [], {}, function() {}.

// how to check a array is empty or not
let arr = [];
if(arr.length === 0) {
    console.log(`Please Enter a valid input!`);
}
else {
    console.log(`Thankyou`);
}

// how to check a object is empty or not
let obj = {};
let arrObj = Object.keys(obj);
if(arrObj.length === 0) {
    console.log(`Please Enter a valid input!`);
}
else {
    console.log(`Thankyou`);
}


// Nullish Coalescing Operator (??): null, undefined.
// let nullishNumber = 10 ?? 20; // nullishNumber = 10
// let nullishNumber = null ?? 20; // nullishNumber = 20
// let nullishNumber = undefined ?? 20; // nullishNumber = 20
// let nullishNumber = null ?? 10 ?? 20; // nullishNumber = 10
let nullishNumber = null ?? undefined ?? 20; // nullishNumber = 20

console.log(`nullishNumber = ${nullishNumber}`);


// ternary operator
// syntax: condition ? true statement : false statement;
// login validation
let userID = "shankar123";
let pass = "pass@123";
((userID === "girija123") && (pass === "pass@123")) ? console.log(`Login Successfully`) : console.log(`Invalid UserID And Password!`); // Invalid UserID And Password!