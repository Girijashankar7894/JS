"use strict";

// Array
let arr = [1, 2, 3, 4, 5];
console.log(`arr = ${arr}`); // arr = 1,2,3,4,5
console.log(`arr.length = ${arr.length}`); // arr.length = 5
console.log(`arr[0] = ${arr[0]}`); // arr[0] = 1
console.log(`arr[4] = ${arr[4]}`); // arr[4] = 5
console.log(`arr[5] = ${arr[5]}`); // arr[5] = undefined

// Array methods

// push() - adds an element to the end of the array and returns the new length of the array
let arr1 = [1, 2, 1, 3];
let newLength = arr1.push(4);
console.log(`arr1 after push(4) = ${arr1}`); // arr1 after push(4) = 1,2,1,3,4
console.log(`newLength = ${newLength}`); // newLength = 5

// pop() - removes the last element from the array and returns that element
let arr2 = [1, 2, 1, 3];
let poppedElement = arr2.pop();
console.log(`arr2 after pop() = ${arr2}`); // arr2 after pop() = 1,2,1
console.log(`poppedElement = ${poppedElement}`); // poppedElement = 3

// unshift() - adds an element to the beginning of the array and returns the new length of the array
let arr3 = [1, 2, 1, 3];
newLength = arr3.unshift(0);
console.log(`arr3 after unshift(0) = ${arr3}`); // arr3 after unshift(0) = 0,1,2,1,3
console.log(`newLength = ${newLength}`); // newLength = 5

// shift() - removes the first element from the array and returns that element
let arr4 = [1, 2, 1, 3];
let shiftedElement = arr4.shift();
console.log(`arr4 after shift() = ${arr4}`); // arr4 after shift() = 2,1,3
console.log(`shiftedElement = ${shiftedElement}`); // shiftedElement = 1

// indexOf() - returns the first index at which a given element can be found in the array, or -1 if it is not present
let arr5 = [1, 2, 1, 3];
let index = arr5.indexOf(1);
console.log(`index of 1 in arr5 = ${index}`); // index of 1 in arr5 = 0
console.log(`index of 4 in arr5 = ${arr5.indexOf(4)}`); // index of 4 in arr5 = -1

// lastIndexOf() - returns the last index at which a given element can be found in the array, or -1 if it is not present
let arr6 = [1, 2, 1, 3];
index = arr6.lastIndexOf(1);
console.log(`last index of 1 in arr6 = ${index}`); // last index of 1 in arr6 = 2
console.log(`last index of 4 in arr6 = ${arr6.lastIndexOf(4)}`); // last index of 4 in arr6 = -1

// includes() - determines whether an array includes a certain value among its entries, returning true or false as appropriate
let arr7 = [1, 2, 1, 3];
let includesOne = arr7.includes(1);
console.log(`arr7 includes 1 = ${includesOne}`); // arr7 includes 1 = true
let includesFour = arr7.includes(4);
console.log(`arr7 includes 4 = ${includesFour}`); // arr7 includes 4 = false

// slice() - returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included)
let arr8 = [1, 2, 1, 3];
let slicedArr = arr8.slice(1, 3);
console.log(`slicedArr = ${slicedArr}`); // slicedArr = 2,1
console.log(`arr8 after slice() = ${arr8}`); // arr8 after slice() = 1,2,1,3

// splice() - changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
let arr9 = [1, 2, 1, 3];
let spliceArr = arr9.splice(1, 3);
console.log(`spliceArr = ${spliceArr}`); // spliceArr = 2,1,3
console.log(`arr9 after splice() = ${arr9}`); // arr9 after splice() = 1

let arr10 = [1, 2, 1, 3, 4];
let spliceArr1 = arr10.splice(1, 3, 5, 6);
console.log(`spliceArr1 = ${spliceArr1}`); // spliceArr = 2,1,3
console.log(`arr10 after splice() = ${arr10}`); // arr10 after splice() = 1,5,6,4

// join() - creates and returns a new string by concatenating all of the elements in an array, separated by commas or a specified separator string.
let arr11 = [1, 2, 1, 3];
let joinArr = arr11.join();
console.log(`joinArr = ${joinArr}`); // joinArr = 1,2,1,3 (By default the array elements are separated with a comma (“,”))
console.log(`Typeof joinArr = ${typeof joinArr}`); // Typeof joinArr = string
console.log(`arr11 = ${arr11}`); // arr11 = 1,2,1,3
console.log(`Typeof arr11 = ${typeof arr11}`); // Typeof arr11 = object

let joinArr1 = arr11.join("");
console.log(`joinArr1 = ${joinArr1}`); // joinArr1 = 1213

let joinArr2 = arr11.join(" ");
console.log(`joinArr2 = ${joinArr2}`); // joinArr2 = 1 2 1 3

// concat() - Additional arrays and/or items to add to the end of the array. Combines two or more arrays. This method returns a new array without modifying any existing arrays.
let arr12 = [1, 2, 3];
let arr13 = [7, 8, 9, 10];

let concatArr = arr12.concat(arr13);
console.log(`concatArr = ${concatArr}`); // concatArr = 1,2,3,7,8,9,10


// spread operator
let spreadArr = [...arr12, ...arr13];
console.log(`spreadArr = ${spreadArr}`); // spreadArr = 1,2,3,7,8,9,10

// flat() - The maximum recursion depth. Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
let arr14 = [1, 2, 3, [4, 5], 6, [7, [8, 9]]];

let flatArr1 = arr14.flat();
console.log(`flatArr1 = ${flatArr1}`); // flatArr1 = [1,2,3,4,5,6,7,[8,9]]

let flatArr2 = arr14.flat(1);
console.log(`flatArr2 = ${flatArr2}`); // flatArr2 = [1,2,3,4,5,6,7,[8,9]]

let flatArr3 = arr14.flat(2);
console.log(`flatArr3 = ${flatArr3}`); // flatArr3 = [1,2,3,4,5,6,7,8,9]

let flatArr4 = arr14.flat(Infinity);
console.log(`flatArr4 = ${flatArr4}`); // flatArr4 = [1,2,3,4,5,6,7,8,9]


// Array.isArray() - Determines whether the passed value is an array. It returns true if the value is an array, and false if it is not.
let arr15 = [1, 2, 3, 4];
let str = "Girija";

let isArr1 = Array.isArray(arr15);
let isArr2 = Array.isArray(str);
console.log(`isArr1 = ${isArr1}\nisArr2 = ${isArr2}`); // isArr1 = true   // isArr2 = false


// Array.from() - It is primarily used to convert non-array structures into actual arrays.
let fromArr = Array.from(str);
console.log(`formArr = ${fromArr}`); // formArr = G,i,r,i,j,a

// Array.of() - creates a new Array instance from a variable number of arguments, regardless of how many arguments there are or what type they are.
let ofArr = Array.of(arr15, str);
console.log(`ofArr = ${ofArr}`); // ofArr = 1,2,3,4,Girija
