"use strict"

// import data
import { validate } from "./frontend/section/signup.js";

// // import data one by one without using any type of mediator file
// import { userName } from "./frontend/section/login.js";
// import { checker } from "./frontend/section/login.js";

// import all exported data in a single line without using any type of mediator file
import { userName, checker } from "./frontend/section/login.js";


console.log(validate());
console.log(`${userName} ${checker()}`);
