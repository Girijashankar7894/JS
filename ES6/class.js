"use strict"

// define class
class employ {
    // define a constructor function
    // N.B: in a class maximum one constructor function is present. every time constructor function call automatically when you create a new object.
    constructor(fName, lName, age) {
        this.firstName = fName;
        this.lastName = lName;
        this.age = age;
    }

    // create a method inside the class
    fullName() {
        console.log(`Employ Name: ${this.firstName} ${this.lastName}`);
    }
}

// create object
const employ1 = new employ("Girija", "Shankar", 26);
const employ2 = new employ("Girija", "Mahal", 24);

// display details
console.log(`employ1 = ${employ1}`);
console.log(`employ2 = ${employ2}`);

// display property
console.log(`employ1's age = ${employ1.age}`);

// call method
employ1.fullName();

