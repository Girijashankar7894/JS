"use strict";

// immediate invoke function expression (IIFE)
// named IIFE
(function fun1() {
    console.log(`This is a named IIFE`);
})();

// unnamed IIFE
(function() {
    console.log(`This is a unnamed IIFE`);
})();

// arrow function IIFE
(() => {
    console.log(`This is a unnamed arrow function IIFE`);
})();

// argument passed inside the IIFE
((name) => {
    console.log(`This is a unnamed arrow function IIFE, which is created by ${name}`);
})("Girija");