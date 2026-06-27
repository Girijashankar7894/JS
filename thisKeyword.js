"use strict"

// this inside global scope
console.log(this); // {}


// this keyword inside an object
const obj = {
    username: "Girija",
    password: "Pass@123",
    printObj: function displayObj() {
        console.log(this);
    }
};
obj.printObj(); // {  username: 'Girija',  password: 'Pass@123',  printObj: [Function: displayObj] }
obj.username = "Shankar";
obj.printObj(); // {  username: 'Shankar',  password: 'Pass@123',  printObj: [Function: displayObj] }


// this keyword inside an function
// this inside regular function
function thisFun1() {
    let num = 10;
    console.log(this); // undefined
    // console.log(this.num); // error
}
thisFun1();


const thisFun2 = function() {
    let num = 20;
    console.log(this); // undefined
    // console.log(this.num); // error
}
thisFun2();

// this inside arrow function
const thisFun3 = () => {
    let num = 20;
    console.log(this); // {}
    console.log(this.num); // undefined
}
thisFun3();
