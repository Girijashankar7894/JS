console.log(4 > 2); // Output: true
console.log(4 < 2); // Output: false
console.log(4 >= 2); // Output: true
console.log(4 <= 2); // Output: false
console.log(4 == 2); // Output: false
console.log(4 != 2); // Output: true
console.log(4 === 2); // Output: false
console.log(4 !== 2); // Output: true

console.log("4" > 2); // Output: true (string "4" is converted to number 4)
console.log("4" < 2); // Output: false (string "4" is converted to number 4)
console.log("4" >= 2); // Output: true (string "4" is converted to number 4)
console.log("4" <= 2); // Output: false (string "4" is converted to number 4)
console.log("4" == 2); // Output: false (string "4" is converted to number 4)
console.log("4" != 2); // Output: true (string "4" is converted to number 4)
console.log("4" === 2); // Output: false (no type conversion, different types)
console.log("4" !== 2); // Output: true (no type conversion, different types)

console.log(4 > "2"); // Output: true (string "2" is converted to number 2)
console.log(4 < "2"); // Output: false (string "2" is converted to number 2)
console.log(4 >= "2"); // Output: true (string "2" is converted to number 2)
console.log(4 <= "2"); // Output: false (string "2" is converted to number 2)
console.log(4 == "2"); // Output: false (string "2" is converted to number 2)
console.log(4 != "2"); // Output: true (string "2" is converted to number 2)
console.log(4 === "2"); // Output: false (no type conversion, different types)
console.log(4 !== "2"); // Output: true (no type conversion, different types)

console.log(4 == "4"); // Output: true (string "4" is converted to number 4)
console.log(4 === "4"); // Output: false (no type conversion, different types)
console.log(4 != "4"); // Output: false (string "4" is converted to number 4)
console.log(4 !== "4"); // Output: true (no type conversion, different types)