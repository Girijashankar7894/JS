"use strict";

// cann't write to undeclared variable
// a = 1; // ReferenceError: a is not defined

// cann't delete variable
// delete Object.prototype; // TypeError: Cannot delete property 'prototype' of function Object() { [native code] }

// cann't duplicate parameter name
// function myFunction(a, a) { } // SyntaxError: Duplicate parameter name in strict mode.

// cann't use with statement
// with (Math) { x = cos(2); } // SyntaxError: Strict mode code may not include a with statement

// cann't use eval to create variables in the surrounding scope
// eval("var x = 1;"); // ReferenceError: x is not defined

// cann't use reserved keywords as variable names
// var let = 1; // SyntaxError: Unexpected strict mode reserved word

// cann't use octal literals
// var x = 010; // SyntaxError: Octal literals are not allowed in strict mode. Use the syntax 0o10 instead.
