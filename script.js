"use strict";

let userInput = document.querySelector("#num-text"); 
let checkButton = document.querySelector("#check");
let ranNumber = document.querySelector("#random-number");
let playScore = document.querySelector("#score");
let highScore = document.querySelector("#highscore");
let message = document.querySelector("#guess-text");
let againBtn = document.querySelector("#again-btn");
let randomNumber = Math.trunc(Math.random() * 20) + 1;

console.log("Random Number", randomNumber);

let scores = 20;

let checkno = () => {

    let guessNo = Number(userInput.value);
    console.log("UserInput", guessNo);

if(guessNo > 20 || guessNo < 0){
    message.textContent = "Between 1 - 20 only!";
} else {
    if(guessNo == randomNumber) {
        document.querySelector("body").style.backgroundColor = "green";
        highScore.textContent = scores;
        message.textContent = "Correct answer!!";
        ranNumber.textContent = randomNumber;

    } else if(guessNo < randomNumber) {
        if(scores > 0){
        console.log("too low");
        scores--;
        message.textContent = "Too Low...";
        playScore.textContent = scores;
        } else {
            message.textContent = "You have lost the game!";
            document.querySelector("body").style.backgroundColor = "Red";
        }

    } else {
        if(scores > 0){
        console.log("too high");
        scores--;
        message.textContent = "Too High...";
        playScore.textContent = scores;
        } else {
            message.textContent = "You have lost the game!";
            document.querySelector("body").style.backgroundColor = "Red";
        }
    }
}

}

checkButton.addEventListener("click", checkno);

let ResetGame = () => {
    document.querySelector("body").style.backgroundColor = "#333";
    message.textContent = "Start Guessing...";
    playScore.textContent = 20;
    highScore.textContent = 0;
    ranNumber.textContent = "?";
    userInput.value = "";
    randomNumber = Math.trunc(Math.random() * 20) + 1;
    scores = 20;
}

againBtn.addEventListener("click", ResetGame);