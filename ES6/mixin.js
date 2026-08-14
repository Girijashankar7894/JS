"use strict"

// Mixin
// create a object
const casualChart = {
    sayHi() {
        console.log(`Hi...`);
    },

    sayBey() {
        console.log(`Bey...`);
    }
};

// create a parent class
class employ {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    employDetails() {
        console.log(`Employ Name: ${this.name}\nEmploy Age: ${this.age}`);        
    }
}

// create a child class and inherits all the property from parent class by using 'extends' keyword.
class developer extends employ {}


// add all property of object with child class 'developer'
Object.assign(developer.prototype, casualChart);

// create a object of child class
const developer1 = new developer("Girija Shankar", 26);

// call all the properties of child class including parent and mixin properties
developer1.employDetails();
developer1.sayHi();