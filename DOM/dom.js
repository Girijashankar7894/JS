"use strict";

// dom selector
// console.log(document.getElementById("heading"));
// console.log(document.getElementsByClassName("navMenu"));
// console.log(document.getElementsByTagName("h1"));
// console.log(document.getElementsByName("domHeading"));


// get and set attributes value
let getHeading = document.getElementById("heading");
console.log(getHeading); // <h1 id="heading" name="domHeading" class="class1 class2">DOM manipulation</h1>

// get attributes value by using key name
// console.log(getHeading.id); // heading
// console.log(getHeading.className); // class1 class2
// console.log(getHeading.classList); // {0: "class1",  1: "class2", length: 2, value: "class1 class2"}
// console.log(getHeading.classList[0]); // class1
// console.log(getHeading.nodeName); // H1
// console.log(getHeading.tagName); // H1


// get attributes value by using attribute name
// console.log(getHeading.getAttribute("id")); // heading
// console.log(getHeading.getAttribute("class")); // class1 class2
// console.log(getHeading.getAttribute("name")); // domHeading


// set attributes
// set attributes using setAttribute() function
getHeading.setAttribute("style", "color: red");

// N.B.: when you add new value in a exiting attribute, you write the exiting value of that attribute with new value otherwise the new value are override over exiting value.
getHeading.setAttribute("class", "class3");
getHeading.setAttribute("name", "domHeading name");


// set attributes using object dot notation.
getHeading.title = "hello";
getHeading.style.background = "black"
getHeading.style = "padding: 10px"
getHeading.style = "padding: 10px; color: red; background: black"


// get content
