"use strict"

// rename import data by using 'as' keyword
import { userName as uName, password as uPass } from "./signup.js";

let userName = "girija01";
let password = "Pass@123"

// export checker function
export function checker() {
    if (userName === uName && password === uPass) {
        return "Login Successfully";
    } else {
        return "Error: Incorrect Username and Password";
    }
}