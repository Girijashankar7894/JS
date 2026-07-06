const body = document.querySelector("body");
const buttons = document.querySelectorAll(".button");
// console.log(buttons);


buttons.forEach((button) => {
    // console.log(button);
    
    button.addEventListener("click", (el) => {    
        // console.log(el);
        // console.log(el.target);
           
        body.style.backgroundColor = `${button.id}`;
    });
});