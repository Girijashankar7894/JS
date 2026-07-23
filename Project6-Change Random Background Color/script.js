"use strict"

const body = document.body;

// generate rgb color
// const color = () => Math.floor(Math.random()*255);

// generate hex(#) color code
const randomColor = () => {
    const hex = "0123456789ABCDEF";
    let hexCode = "#";
    for (let i = 0; i < 6; i++) {
        hexCode += hex[Math.floor(Math.random()*16)];
    }
    return hexCode;
};

setInterval(() => {
    // rgb color 
    // let backgroundColor = `rgb(${color()}, ${color()}, ${color()})`;
    // body.style.background = backgroundColor;
        
    body.style.background = randomColor();
}, 2000);