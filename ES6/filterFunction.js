"use strict"

// input - [10, 22, 12, 16, 54, 49]     output - [22, 54, 49]


// initialize an array
const arr = [10, 22, 12, 16, 54, 49];


// Process-01: filter() using anonymous function
const filtrateArr1 = arr.filter(function(el) {
    return el>20;
});
console.log(filtrateArr1);


// Process-02: filter() using arrow function
const filtrateArr2 = arr.filter((el) => el>20);
console.log(filtrateArr2);


// filter a product list for a e-commerce website.
const products = [
  {
    id: 1,
    name: "Wireless Mouse",
    color: "Black",
    price: 29.99,
    category: "Electronics"
  },
  {
    id: 2,
    name: "Leather Wallet",
    color: "Brown",
    price: 45.00,
    category: "Accessories"
  },
  {
    id: 3,
    name: "Running Shoes",
    color: "Blue",
    price: 89.99,
    category: "Footwear"
  },
  {
    id: 4,
    name: "Water Bottle",
    color: "Green",
    price: 15.50,
    category: "Fitness"
  },
  {
    id: 5,
    name: "Desk Lamp",
    color: "White",
    price: 34.99,
    category: "Home Office"
  },
  {
    id: 6,
    name: "Mechanical Keyboard",
    color: "Grey",
    price: 79.99,
    category: "Electronics"
  },
  {
    id: 7,
    name: "Bluetooth Headphones",
    color: "Black",
    price: 120.00,
    category: "Electronics"
  },
  {
    id: 8,
    name: "Sunglasses",
    color: "Black",
    price: 25.50,
    category: "Accessories"
  },
  {
    id: 9,
    name: "Canvas Backpack",
    color: "Green",
    price: 49.99,
    category: "Accessories"
  },
  {
    id: 10,
    name: "Leather Boots",
    color: "Brown",
    price: 110.00,
    category: "Footwear"
  },
  {
    id: 11,
    name: "Yoga Mat",
    color: "Purple",
    price: 22.99,
    category: "Fitness"
  },
  {
    id: 12,
    name: "Ergonomic Chair",
    color: "Black",
    price: 189.99,
    category: "Home Office"
  }
];

// filter()
const filtrateProducts = products.filter((el) => el.category === "Home Office");

console.log(filtrateProducts);