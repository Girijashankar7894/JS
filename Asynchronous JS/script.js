"use strict"

const h1 = document.querySelector("h1");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");

// setTimeout()
// setTimeout(() => {
//     h1.innerHTML = "Welcome To Our Programming World!";
// }, 2000);

// setTimeout() using reference handler or callback function
// const handlerFunction = () => {
//     h1.innerHTML = "Welcome To Our Programming World!";
// }
// setTimeout(handlerFunction, 2000);

let i = 0;
let interval;

const startInterval = () => {
    if(!interval) {
        interval = setInterval(() => {
            h1.innerHTML = `${i++}`
        }, 1000);
    }
};

const stopInterval = () => {
    clearInterval(interval);
    interval = null;
};

const resetInterval = () => {
    clearInterval(interval);
    interval = null;
    h1.innerHTML = 0;
    i = 0;
};

startButton.addEventListener("click", () => {
    startInterval();
});

stopButton.addEventListener("click", () => {
    stopInterval();
});

resetButton.addEventListener("click", () => {
    resetInterval();
});
