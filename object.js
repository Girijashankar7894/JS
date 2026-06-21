"use strict"

// object literals
// define Symbol
const favSymbol = Symbol("s1");

const obj = {
    userName: "girijashankar7894",
    password: "girija@123",
    age: 26,
    "mobile Number": 7894078752,
    logIn: false,
    [favSymbol]: "Hii", // add symbol inside the object.
    marks: [99, 74, 85]
};
// display object
console.log(obj); // {userName: 'girijashankar7894', password: 'girija@123', age: 26, 'mobile Number': 7894078752, logIn: false, marks: [ 99, 74, 85 ], Symbol(s1): 'Hii'}

// display the value ofn a key present in side object

// process-1
console.log(`userName = ${obj.userName}`); // userName = girijashankar7894

// process-2
console.log(`password = ${obj["password"]}`); // password = girija@123


// display the value of "mobile number"
console.log(`mobile Number = ${obj["mobile Number"]}`); // mobile Number = 7894078752

// display the value of symbol
console.log(`favSymbol = ${obj[favSymbol]}`); // favSymbol = Hii


// object contracture
const objCon = new Object();

// add property in side the object
objCon.userName = "Shankar7894";
objCon.password = "Shankar@123";
objCon.logIn = true;

// display object constructor
console.log(objCon); // { userName: 'Shankar7894', password: 'Shankar@123', logIn: true }


// merge object
const obj1 = {id: 1, email: "girijashankar7894@gmail.com"};
const obj2 = {password: "Pass@123", logIn: false};

console.log(obj1); // { id: 1, email: 'girijashankar7894@gmail.com' }
console.log(obj2); // { password: 'Pass@123', logIn: false }


// Object.assign()
// merge one object with another
// const obj3 = Object.assign(obj1, obj2);

// merge objects separately
// process-1
const obj3 = Object.assign({}, obj1, obj2);

// process-2
const obj4 = {...obj1, ...obj2};

console.log(obj1); // { id: 1, email: 'girijashankar7894@gmail.com' }
console.log(obj2); // { password: 'Pass@123', logIn: false }
console.log(obj3); // {id: 1, email: 'girijashankar7894@gmail.com', password: 'Pass@123', logIn: false}
console.log(obj4); // {id: 1, email: 'girijashankar7894@gmail.com', password: 'Pass@123', logIn: false}


// Object inside the array
const userData = [
    {
        id: 1,
        userName: "user123",
        password: "Pass@123"
    },
    {
        id: 2,
        userName: "user1234",
        password: "Pass@1234"
    },
    {
        id: 3,
        userName: "user12345",
        password: "Pass@12345"
    }
];

console.log(userData); // [{ id: 1, userName: 'user123', password: 'Pass@123' }, { id: 2, userName: 'user1234', password: 'Pass@1234' }, { id: 3, userName: 'user12345', password: 'Pass@12345' }]
console.log(userData[0].userName); // user123
console.log(userData[2].password); // Pass@12345


// Object.keys()
const keyArr = Object.keys(obj1);
console.log(keyArr); // [ 'id', 'email' ]

// Object.values()
const valueArr = Object.values(obj1);
console.log(valueArr); // [ 1, 'girijashankar7894@gmail.com' ]

// Object.entries()
const entriesArr = Object.entries(obj1);
console.log(entriesArr); // [ [ 'id', 1 ], [ 'email', 'girijashankar7894@gmail.com' ] ]

// objectName.hasOwnProperty()
const hasOwnPropertyArr1 = obj1.hasOwnProperty("email");
console.log(hasOwnPropertyArr1); // true

const hasOwnPropertyArr2 = obj1.hasOwnProperty("password");
console.log(hasOwnPropertyArr2); // false



// object destructuring
const destructuringObj = {
    id: 447,
    userName: "JEC",
    password: "Jec@123",
    "mobile number": 1234567890,
    login: false,
};

const {userName: uName, login: lo, "mobile number": mNumber} = destructuringObj;
// const {userName: uName} = destructuringObj;
console.log(uName); // JEC
console.log(lo); // false
console.log(mNumber); // 1234567890