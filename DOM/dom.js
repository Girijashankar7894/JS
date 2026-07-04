"use strict";

// dom selector
// console.log(document.getElementById("heading"));
// console.log(document.getElementsByClassName("navMenu"));
// console.log(document.getElementsByTagName("h1"));
// console.log(document.getElementsByName("domHeading"));
// console.log(document.querySelector("li"));
// console.log(document.querySelector("#navbar"));
// console.log(document.querySelector(".navMenu"));
// console.log(document.querySelector("h1[name='domHeading']"));
// console.log(document.querySelectorAll("li"));
// console.log(document.querySelectorAll("#navbar"));
// console.log(document.querySelectorAll(".navMenu"));


// get and set attributes value
let getHeading = document.getElementById("heading");
// console.log(getHeading); // <h1 id="heading" name="domHeading" class="class1 class2">DOM manipulation</h1>

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
// console.log(getHeading.innerText); // DOM manipulation is a concept
// console.log(getHeading.textContent); // DOM manipulation is a JavaScript concept
// console.log(getHeading.innerHTML); // DOM manipulation is a <span style="display: none;">JavaScript</span> concept


// how to access all the elements present in a nodeList
// let nodeListOfLi = document.querySelectorAll("li");
// console.log(nodeListOfLi);
// console.log(nodeListOfLi[0]);
// nodeListOfLi.forEach((li) => console.log(li));


// how to access all the elements present in a HTMLCollection
// let HTMLCollectionLi = document.getElementsByClassName("navMenu")
// console.log(HTMLCollectionLi);
// console.log(HTMLCollectionLi[0]);
// N.B.: forEach() not working for HTMLCollection directly. So first convert HTMLCollection to array then apply it.
// let updatedHTMLCollectionLi = Array.from(HTMLCollectionLi);
// console.log(updatedHTMLCollectionLi);
// updatedHTMLCollectionLi.forEach((li) => console.log(li));



// relations in dom
// access child elements through parent.
let parent = document.querySelector("ul");
// console.log(parent);
// console.log(parent.childElementCount);
// console.log(parent.childNodes);
// console.log(parent.children);
// console.log(parent.firstChild);
// console.log(parent.lastChild);
// console.log(parent.firstElementChild);
// console.log(parent.lastElementChild);
// console.log(parent.hasChildNodes());

// access parent element through children.
let child = document.querySelector("li");
// console.log(child);
// console.log(child.parentElement);
// access sibling element
// console.log(child.nextSibling);
// console.log(child.previousSiblingSibling);
// console.log(child.nextElementSibling);
// console.log(child.previousElementSibling);


//  create new element in dom
const h2 = document.createElement("h2");
console.log(h2);

// add attributes by using inbuilt key of attribute.
h2.id = Math.floor(Math.random() * (99-10) + 10);
h2.className = "heading2";

// add attributes by using setAttribute() function
h2.setAttribute("style", "background-color: black; color: green;");
h2.style.padding = "10px";

// add content inside the new element by using innerText.
// N.B.: when you add new content inside the exiting element, you write the exiting content of that element with new content otherwise the new content are override over exiting content.
h2.innerText = "This Element Is Created By DOM";

// add content inside the new element by using createTextNode() function.
let text = document.createTextNode("Girija");
h2.appendChild(text);

// add element inside the document.
document.body.appendChild(h2);