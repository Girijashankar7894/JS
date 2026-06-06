var name = "Girija Shankar";
let age = 30;
const country = "India";
state = "Odisha";

console.log("Name: " + name);
console.log("Age: " + age);
console.log("Country: " + country);
console.log("State: " + state);

name = "Shankar";
age = 31;
// country = "USA";     // we cannot change the value of a constant variable
state = "California";

console.log("Name: " + name);
console.log("Age: " + age);
console.log("Country: " + country);
console.log("State: " + state);

console.table({ name, age, country, state });
console.table([name, age, country, state]);

/* Prefer not to use var
 
    -var is function-scoped and can lead to unexpected behavior due to hoisting and re-declaration.

    -let and const are block-scoped, which helps prevent bugs and makes the code more predictable.    
*/