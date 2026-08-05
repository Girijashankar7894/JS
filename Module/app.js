"use strict"

<<<<<<< HEAD
// import data
import { validate } from "./frontend/section/signup.js";

// // import data one by one without using any type of mediator file
// import { userName } from "./frontend/section/login.js";
// import { checker } from "./frontend/section/login.js";

// import all exported data in a single line without using any type of mediator file
import { userName, checker } from "./frontend/section/login.js";


console.log(validate());
console.log(`${userName} ${checker()}`);
=======
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
>>>>>>> ac3dba91a7f129a2780f4a23b81dccbe0d23dae1
