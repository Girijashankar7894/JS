"use strict"

// Process-02 script
const form = document.querySelector("form");
form.addEventListener("submit", (el) => {
    el.preventDefault();
});

const button = document.querySelector("button");
button.addEventListener("click", (el) => {
       
    const input = document.querySelectorAll(".inputFiled");
    const height = input[0].value;
    const weight = input[1].value;
    const outputField = input[input.length-1];
    
   if(!(height) || height<0) {
        outputField.placeholder = `Please enter a valid height!`;
   } else if(!(weight) || weight<0) {
        outputField.placeholder = `Please enter a valid weight!`;
   } else {
        const result = +((+weight / Math.pow((+height / 100), 2)).toFixed(2));

     //    check the result with weight guide.
     if(result < 18.6) {
        outputField.placeholder = `${result} (Under Weight))`;
        outputField.style.color = "orange";
     } else if(result <= 24.9) {
        outputField.placeholder = `${result} (Normal Weight))`;
        outputField.style.color = "green";
        console.log(outputField); 
        
     } else {
        outputField.placeholder = `${result} (Over Weight))`;
        outputField.style.color = "red";
     }
   }
   
});