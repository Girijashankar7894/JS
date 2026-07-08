"use strict"

// Process-01 script
const inputs = document.querySelectorAll(".inputFiled");
const button = document.querySelector("#calculate");

// stop submitting or reloading form after submit. 
const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
    event.preventDefault();
});


button.addEventListener("click", () => {
    // process-01
    let height = +(inputs[0].value);
    let weight = +(inputs[1].value);

    let heightInInch = height / 100;
    let output = weight / Math.pow(heightInInch, 2);

    let fixOutputRange = +(output.toFixed(2));
    inputs[inputs.length-1].placeholder = `${fixOutputRange}`

    // process-02
    // let output = +(inputs[1].value) / Math.pow((+(inputs[0].value) / 100), 2);        
    // inputs[inputs.length-1].placeholder = `${+(output.toFixed(2))}`
});