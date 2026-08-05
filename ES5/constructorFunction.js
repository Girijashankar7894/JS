"use strict"

// create constructor function: the first character of the constructor function is always in uppercase.
function User(uName, uId, uAge) {
    this.name = uName;
    this.id = uId;
    this.age = uAge;
}

// create new object by using constructor function
const user1 = new User("Girija", 123, 26);
const user2 = new User("Shankar", 178, 74);
const user3 = new User("Mahal", 7334, 29);

console.log(user1); // User { name: 'Girija', id: 123, age: 26 }
console.log(user2); // User { name: 'Shankar', id: 178, age: 74 }
console.log(user3); // User { name: 'Mahal', id: 7334, age: 29 }

// display id of user2
console.log(user2.id); // 178

