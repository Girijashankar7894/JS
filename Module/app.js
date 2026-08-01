"use strict"

// // import data one by one without any mediator file
// import { validate } from "./frontend/section/signup.js";
// import { userName } from "./frontend/section/signup.js";

// import data in a single line without any mediator file
import {userName, validate} from "./frontend/section/signup.js"

console.log(`${userName} ${validate()}`);