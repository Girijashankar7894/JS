"use strict";

// for of loop
// display all the elements present in an array
let fruit = ["apple", "orange", "banana", "pineapple"];
for(const fruitName of fruit) {
    console.log(fruitName);
}

// display all the characters present in a string.
let fruits = "pineapple";
for(const fruitCharacter of fruits) {
    console.log(fruitCharacter);
}


// maps
const map = new Map();
map.set("a", "apple");
map.set("b", "ball");
map.set("c", "cat");
map.set("a", "apple");
map.set("d", "dog");
console.log(map);

// store both key and value of map in array format
// for(const mapKey of map) {
//     console.log(mapKey);
// }

// display both key and value of map separately
for(const [mapKey, mapValue] of map) {
    console.log(`${mapKey} for ${mapValue}`);
}

// N.B.:- for object you can not use for of loop.


// for in loop
// display all the elements present in an array
let fruit1 = ["apple", "orange", "banana", "pineapple"];
for(const fruitName in fruit1) {
    console.log(fruit1[fruitName]); // here fruitName represents index of elements present in an array.
}

// N.B.:- you can not use for in loop for retrieving all the characters present in a string.
// N.B.:- you can not use for in loop for retrieving all the elements present in a map.

// display all the elements present in an object
let obj = {
    a: "apple",
    b: "ball",
    c: "cat",
    d: "dog"
};
for(const objKey in obj) {
    console.log(obj[objKey]);
    
}


// for each