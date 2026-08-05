"use strict"

// create a default function
export default function() {
    console.log(`Default function of signup section`);
}

// export username
export let userName = "shankar123";
export let password = "Pass@123";

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