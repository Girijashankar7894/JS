"use strict";

// global scope
var a = 10;
let b = 20;
const c = 30;

// local scope part-1
if(true) {
    var a = 45;
    let b = 55;
    const c = 65;

    console.log(`inner: a = ${a}`); // inner: a = 45
    console.log(`inner: b = ${b}`); // inner: a = 55
    console.log(`inner: c = ${c}`); // inner: a = 65
}

console.log(`outer: a = ${a}`); // outer: a = 45
console.log(`outer: b = ${b}`); // outer: a = 20
console.log(`outer: c = ${c}`); // outer: a = 30


// local scope part-2
let name = "Girija";
if(true) {
    let first = 11;
    if(true) {
        let second = 22;
        console.log(`name is ${name}`); // name is Girija
        console.log(`first value is ${first}`); // first value is 11
        console.log(`second value is ${second}`); // second value is 22
    }
    console.log(`name is ${name}`); // name is Girija
    console.log(`first value is ${first}`); // first value is 11
    // console.log(`second value is ${second}`); // Error
}
console.log(`name is ${name}`); // name is Girija
// console.log(`first value is ${first}`); // Error
// console.log(`second value is ${second}`); // Error
