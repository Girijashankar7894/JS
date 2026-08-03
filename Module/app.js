"use strict"

// // import data one by one without any mediator file
// import { default as signDefault } from "./frontend/section/signup.js"
// import { validate } from "./frontend/section/signup.js";
// import { userName } from "./frontend/section/signup.js";

// import data in a single line without any mediator file
// import { default as signDefault, userName, validate } from "./frontend/section/signup.js"

// console.log(`${userName} ${validate()}`);


// import all export data in a single line by using '*'
// import * as sign from "./frontend/section/signup.js";

// console.log(`${sign.userName} ${sign.validate()}`);
// if you import all data by using '*' and don't want to provide a name to default function then you can use default function as object literals.
// sign.default();

// if you import all data by using '*' then for default function first you provide a name for default function then you use '*' by using ','
import signDefault, * as sign from "./frontend/section/signup.js";
signDefault();


// import data one by one from any mediator file
import * as profileData from "./frontend/mediator.js";
console.log(profileData);
