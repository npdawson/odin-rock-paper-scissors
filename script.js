"use strict";

/* returns "Rock", "Paper", or "Scissors" at random as the computer's play */
function computerPlay() {
    let guess = Math.floor(Math.random() * 3);
    if (guess === 0) {
        return "Rock"
    } else if (guess === 1) {
        return "Paper"
    } else {
        return "Scissors"
    }
}

/* 
 * play a single round of the game. takes the computer's play 
 * and the user's play and returns a string that declares the winner
 */
function playRound(playerSelection, computerSelection) {
    let playerMove = playerSelection.toLowerCase();
    let computerMove = computerSelection.toLowerCase();
    switch (playerMove) {
        case "rock":
            switch (computerMove) {
                case "rock":
                    return "It's a tie! Both players chose Rock!";
                case "paper":
                    return "You lose! Paper beats Rock!";
                case "scissors":
                    return "You win! Rock beats Scissors!";
            }
        case "paper":
            switch (computerMove) {
                case "rock":
                    return "You win! Paper beats Rock!";
                case "paper":
                    return "It's a tie! Both players chose Paper!";
                case "scissors":
                    return "You lose! Scissors beats Paper!";
            }
        case "scissors": 
            switch (computerMove) {
                case "rock":
                    return "You lose! Rock beats Scissors!";
                case "paper":
                    return "You win! Scissors beats Paper!";
                case "scissors":
                    return "It's a tie! Both players chose Scissors!";
            }
    }
}

function registerMove(e) {
    let result = playRound(this.id, computerPlay());
    const resultDiv = document.querySelector('#results');
    resultDiv.textContent = result;
}

const buttons = document.querySelectorAll('#buttons button');
buttons.forEach(button => button.addEventListener('click', registerMove));
