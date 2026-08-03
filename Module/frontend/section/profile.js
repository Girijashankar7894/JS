"use strict"

import { userName, password } from "./login.js";

const profile = {
    username: userName,
    password: password,
    email: ""
};

function addEmail() {
    return `You can't add your email ID`
}

function editUsername() {
    return `You can't edit your email ID`
}

// export multiple variables and functions in a single line
export { profile, addEmail, editUsername };