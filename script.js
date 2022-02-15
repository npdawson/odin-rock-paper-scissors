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

/* play a single round of the game. takes the computer's play and the user's play and returns a string that declares the winner*/
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

/*Play 5 rounds, keeping score for the player and computer, and report a winner*/
function game() {
    let rounds = 5;
    let playerScore = 0;
    let computerScore = 0;

    let playerMove;
    let computerMove;
    let playMessage;

    for (let i = 0; i < rounds; i++) {
        playerMove = window.prompt(`Round ${i + 1}! Choose your play!`);
        computerMove = computerPlay();
        playMessage = playRound(playerMove, computerMove);
        console.log(playMessage);
        if (playMessage.search("win") != -1) {
            playerScore++;
        } else if (playMessage.search("lose") != -1) {
            computerScore++;
        }
    }
    
    console.log(`Computer won ${computerScore} games and player won ${playerScore} games.`);
    if (computerScore > playerScore) {
        console.log("You lose!");
    } else if (computerScore < playerScore) {
        console.log("You win!");
    } else {
        console.log("It was a tie!");
    }
}
