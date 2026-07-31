"use strict"

// export username
export let userName = "shankar123";
let password = "Pass@123";

// export validate function
export function validate() {
    if(!userName || !password) {
        return "Please Enter Valid Username or Password";
    } else {
        return signup();
    }
};

function signup() {
    return "Signup Successfully";
};