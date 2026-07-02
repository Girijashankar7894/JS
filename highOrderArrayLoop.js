"use strict";

// for of loop
// display all the elements present in an array
let fruit = ["apple", "orange", "banana", "pineapple"];
for(const fruitName of fruit) {
    console.log(fruitName);
}

// display all the characters present in a string.
let fruits = "pineapple";
for(const fruitCharacter of fruits) {
    console.log(fruitCharacter);
}


// maps
const map = new Map();
map.set("a", "apple");
map.set("b", "ball");
map.set("c", "cat");
map.set("a", "apple");
map.set("d", "dog");
console.log(map);

// store both key and value of map in array format
// for(const mapKey of map) {
//     console.log(mapKey);
// }

// display both key and value of map separately
for(const [mapKey, mapValue] of map) {
    console.log(`${mapKey} for ${mapValue}`);
}

// N.B.:- for object you can not use for of loop.


// for in loop
// display all the elements present in an array
let fruit1 = ["apple", "orange", "banana", "pineapple"];
for(const fruitName in fruit1) {
    console.log(fruit1[fruitName]); // here fruitName represents index of elements present in an array.
}

// N.B.:- you can not use for in loop for retrieving all the characters present in a string.
// N.B.:- you can not use for in loop for retrieving all the elements present in a map.

// display all the elements present in an object
let obj = {
    a: "apple",
    b: "ball",
    c: "cat",
    d: "dog"
};
for(const objKey in obj) {
    console.log(obj[objKey]);   
}


// for each loop: it have 3 arguments. i.e- element, index, originalArray.
// display all elements present in an array
let fruit2 = ["apple", "orange", "banana", "pineapple"];

// process-1
fruit2.forEach(function (fruitName) {
    console.log(fruitName);
});

// process-2
fruit2.forEach((fruitName) => {
    console.log(fruitName);
});

// process-3
function funReference(fruitName) {
    console.log(fruitName);
}
fruit2.forEach(funReference); // by using function reference not calling the function.


// display all elements present in an array including their index number and original array.
fruit2.forEach((fruitName, fruitIndex, fruits) => {
    console.log(`${fruitName} is present at ${fruitIndex} position on ${fruits} array`);
});

// display all object present in an array
let arrObj = [
    {
        id: 1,
        username: "girija",
        password: "Pass@1"
    },
    {
        id: 2,
        username: "shankar",
        password: "Pass@12"
    },
    {
        id: 3,
        username: "mahal",
        password: "Pass@123"
    }
];

arrObj.forEach((element) => {
    console.log(element);
});

// N.B.: forEach() does not return any type of value

// filter()
let price = [99, 49, 69, 29];
let filterPrice = price.filter( (pr) => (pr >= 50) );
console.log(filterPrice);

let productDetails = [
    {
        productID: 1,
        productName: "shoes",
        category: "men",
        price: 999,
        rating: 4
    },
    {
        productID: 2,
        productName: "ear ring",
        category: "women",
        price: 99,
        rating: 5
    },
    {
        productID: 3,
        productName: "lipstick",
        category: "women",
        price: 299,
        rating: 3.9
    },
    {
        productID: 4,
        productName: "sunglass",
        category: "men",
        price: 799,
        rating: 4.5
    },
    {
        productID: 5,
        productName: "shoes",
        category: "women",
        price: 1099,
        rating: 3.5
    },
    {
        productID: 6,
        productName: "kurtis",
        category: "women",
        price: 999,
        rating: 4.9
    },
    {
        productID: 7,
        productName: "bodylotion",
        category: "bisexual",
        price: 149,
        rating: 4.2
    },
    {
        productID: 8,
        productName: "computer glass",
        category: "women",
        price: 899,
        rating: 5
    },
];
// let productFilter = productDetails.filter( (pr) => (pr.category === "men") );
// let productFilter = productDetails.filter( (pr) => (pr.price <= 500) );
let productFilter = productDetails.filter( (pr) => ((pr.price >= 500) && (pr.category === "women")) );
console.log(productFilter);


// map()
let arrMap = [10, 20, 30, 40];
let updatedArr = arrMap.map( (am) => (am + 1) );

console.log(updatedArr);



// calculate the all product price after GST
let updatedProductDetails = productDetails.map( (em) => {
    let newObj = {
        productName: em.productName,
        "price after GST": (em.price + (em.price * 18 / 100))
    };
    return newObj;
} );

console.log(updatedProductDetails);


// reduce()
let reduceArr = [10, 12, 15, 18, 20];
let afterReduceArray = reduceArr.reduce( (previousValue, currentValue) => (previousValue + currentValue), 0 );
console.log(afterReduceArray);


// calculate the total product price
let totalPrice = productDetails.reduce( (previousValue, currentValue) => (previousValue + currentValue.price), 0 );
console.log(`Total Price = ${totalPrice}`);