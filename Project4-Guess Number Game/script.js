const form = document.querySelector("form");
form.addEventListener("submit", (el) => {
    el.preventDefault();
});

const submit = document.querySelector("[type='submit']");
let count = 10;
submit.addEventListener("click", (el) => {
    const output = document.querySelector("label");
    const userInput = submit.previousElementSibling;
    const userInputNumber = +(userInput.value);
    const previousGuesses = document.querySelector("#previousGuesses");
    const guessesRemaining = document.querySelector("#guessesRemaining");
    
    if(!userInputNumber || userInputNumber < 1 || userInputNumber > 100) {
        output.innerHTML = `${userInputNumber} is not valid!`;
        output.style.color = "red";
    } else {
        if(count > 0) {
            // generate random number in between 1 to 100.
            const randomNumber = Math.floor((Math.random() * (100-1)) + 1);

            (randomNumber === userInputNumber) ? output.innerHTML = `!Congratulation!` : output.innerHTML = `!Sorry!`;
        } else {
            output.innerHTML = `!Limit Exceed!`;
            userInput.readOnly = true;
            submit.removeEventListener();
        }
        count--;
        previousGuesses.innerHTML = userInputNumber;
        guessesRemaining.innerHTML = count;
    }
    
});

