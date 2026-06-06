console.log("Girija" + 2); // Concatenates string and number, resulting in "Girija2"
console.log("Girija" - 2); // Attempts to subtract a number from a string, resulting in NaN (Not a Number)
console.log("Girija" * 2); // Attempts to multiply a string by a number, resulting in NaN
console.log("Girija" / 2); // Attempts to divide a string by a number, resulting in NaN
console.log("Girija" % 2); // Attempts to find the remainder of a string divided by a number, resulting in NaN

console.log("42" + 2); // Concatenates string and number, resulting in "422"
console.log("42" - 2); // Converts string to number and subtracts, resulting in 40
console.log("42" * 2); // Converts string to number and multiplies, resulting in 84
console.log("42" / 2); // Converts string to number and divides, resulting in 21
console.log("42" % 2); // Converts string to number and finds the remainder, resulting in 0

console.log(2 + 2 + "2"); // Evaluates left to right: (2 + 2) is 4, then concatenates with "2", resulting in "42"
console.log("2" + 2 + 2); // Evaluates left to right: "2" + 2 is "22", then "22" + 2 is "222"
console.log(2 + "2" + 2); // Evaluates left to right: 2 + "2" is "22", then "22" + 2 is "222"
console.log(2 + 2 + 2); // Evaluates left to right: (2 + 2) is 4, then 4 + 2 is 6


