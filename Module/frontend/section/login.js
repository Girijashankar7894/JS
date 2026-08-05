"use strict"

// rename import data by using 'as' keyword
import { userName as uName, password as uPass } from "./signup.js";

<<<<<<< HEAD
export let userName = "shankar123";
let password = "Pass@123"
=======
export let userName = "girija01";
export let password = "Pass@123"
>>>>>>> ac3dba91a7f129a2780f4a23b81dccbe0d23dae1

// export checker function
export function checker() {
    if (userName === uName && password === uPass) {
        return "Login Successfully";
    } else {
        return "Error: Incorrect Username and Password";
    }
}

