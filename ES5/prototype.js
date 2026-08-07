"use strict"

// create constructor function of Employ
function Employ(eName, eID) {
    this.employName = eName;
    this.employID = eID;
}

// add property inside the Employ object prototype
Employ.prototype.salary = true;

// create new employ object
const employ1 = new Employ("Girija", 712);
const employ2 = new Employ("Mahal", 713);

// display all employ details
console.log(employ1);
console.log(employ2);

// call salary property from Employ object prototype
console.log(employ1.salary);




// create constructor function of Person
function Person(fName, lName, age) {
    this.firstName = fName;
    this.lastName = lName;
    this.age = age;
}

// add function inside the Person object prototype
Person.prototype.displayFullName = function() {
    console.log(`${this.firstName} ${this.lastName}`);
};

// create new person object
const person1 = new Person("Shankar", "Mahal", 29);

// display all employ details
console.log(person1);

// call displayFullName property from Person object prototype
person1.displayFullName();



// inherit or connect Employ object prototype with Person object
Person.prototype.__proto__ = Employ.prototype;

// access Employ object prototype property by person1
console.log(person1.salary);



// replace Person object prototype by Employ object prototype
Person.prototype = Object.create(Employ.prototype);

// access Person object prototype method by person1
person1.displayFullName();

// access Employ object prototype property by person1
console.log(person1.salary);
