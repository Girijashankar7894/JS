// Process-02
let randomNumber = Math.floor(Math.random() * (100-1) + 1);

// const form = document.querySelector("form");
// form.addEventListener("submit", (el) => {el.preventDefault()});

const userInput = document.querySelector("[type='number']");
const submitButton = userInput.nextElementSibling;
const previousGuesses = document.querySelector("#previousGuesses");
const guessesRemaining = document.querySelector("#guessesRemaining");
const outputSection = previousGuesses.parentElement;


const h2 = document.createElement("h2");



let previousGuessesContainer = [];
let guessesRemainingValue = 10;
let playGame = true;


  
console.log(playGame);
if(playGame) {
    submitButton.addEventListener("click", (el) => {
        el.preventDefault();
        let guessNumber = parseInt(userInput.value);
        checkValidation(guessNumber);
    });
}


function checkValidation(guessNumber) {
    if(!guessNumber) {
        displayMessage(`Enter a valid input`);
    } else if(guessNumber < 1) {
        displayMessage(`Input is not less than 1`);
    } else if(guessNumber > 100) {
        displayMessage(`Input is not grater than 100`);
    } else {
        matching(guessNumber);
    }
}

function matching(guessNumber) {
    if(guessNumber === randomNumber) {
        // displayMessage(`Exact Match`);
        displayMessage(`Exact Match. <span id="startGame">Start Again</span>`);
        updateOutput(guessNumber);
        endGame();
    } else if(guessNumber < randomNumber) {
        displayMessage(`Number is too low`);
        updateOutput(guessNumber);
    } else {
        displayMessage(`Number is too heigh`);
        updateOutput(guessNumber);
    }
}

function updateOutput(guessNumber) {
    previousGuessesContainer.push(guessNumber);
    previousGuesses.innerHTML = previousGuessesContainer;

    --guessesRemainingValue;
    guessesRemaining.innerHTML = guessesRemainingValue;

    if(guessesRemainingValue === 0) {
        displayMessage(`Game Over. The random number was ${randomNumber}. <span id="startGame">Start Again</span>`);
        endGame();
    }

}

function displayMessage(message) {
    h2.innerHTML = message;
    outputSection.appendChild(h2);

    userInput.value = "";
}

function endGame() {
    userInput.setAttribute("disabled", "");
    submitButton.setAttribute("disabled", "");
    playGame = false;
    startGame();
}

function startGame() {
    const startGame = document.querySelector("#startGame");
    startGame.style.cursor = "pointer";
    startGame.style.color = "green";

    startGame.addEventListener("click", () => {
        randomNumber = Math.floor(Math.random() * (100-1) + 1);
        previousGuessesContainer = [];
        guessesRemainingValue = 10;
        playGame = true;
        userInput.removeAttribute("disabled");
        submitButton.removeAttribute("disabled");
        h2.innerHTML = "";
        previousGuesses.innerHTML = "NA";
        guessesRemaining.innerHTML = guessesRemainingValue;
    });
    
}