"use strict";

// for loop
// print 1 to 10 natural number
for(let i = 1; i <= 10; i++) {
    console.log(i); // 1 2 3 4 5 6 7 8 9 10
}

// a control flow inside the for loop
// break keyword
for (let i = 1; i <= 5; i++) {
    if(i === 3) {
        console.log(`Detected = ${i}`);
        break;
    }
    console.log(`value of i = ${i}`);
}

// continue keyword
for (let i = 1; i <= 5; i++) {
    if(i === 3) {
        console.log(`Detected = ${i}`);
        continue;
    }
    console.log(`value of i = ${i}`);
}


// nested loop
// print 2 to 5 table
for (let i = 2; i <= 5; i++) {
    console.log(`Table of ${i}`);
    
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i*j}`);
    }
}


// loop inside an array
// print all the elements present in an array
const arr = ["Apple", "Orange", "Banana", "Pineapple"];
for (let i = 0; i < arr.length; i++) {
    console.log(`arr[${i}] = ${arr[i]}`);    
}