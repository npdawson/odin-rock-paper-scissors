"use strict";

/* returns "Rock", "Paper", or "Scissors" at random as the computer's play */
function computerPlay() {
    let guess = Math.floor(Math.random() * 3);
    if (guess === 0) {
        return "rock"
    } else if (guess === 1) {
        return "paper"
    } else {
        return "scissors"
    }
}

/* 
 * play a single round of the game. takes the user's play 
 * and the computer's play and returns a string that declares the winner
 */
function playRound(playerMove) {
    const winnerStr = document.querySelector('#winner-string');
    if (winnerStr.textContent !== '') winnerStr.textContent = '';
    let computerMove = computerPlay();
    let resultStr = '';
    if (playerMove === computerMove) {
        resultStr = `It's a Tie! Both players chose ${playerMove}.`;
    } else if (playerMove === "rock" && computerMove === "scissors" ||
               playerMove === "paper" && computerMove === "rock" ||
               playerMove === "scissors" && computerMove === "paper") {
        resultStr = `You win! ${playerMove} beats ${computerMove}.`;
        addScore('player');
    } else {
        resultStr = `You lose! ${computerMove} beats ${playerMove}.`;
        addScore('computer');
    }
    const results = document.querySelector("#result-string");
    results.textContent = resultStr;
}

function addScore(winner) {
    const scoreSpan = document.querySelector(`#${winner}-score`);
    let currentScore = parseInt(scoreSpan.textContent);
    currentScore += 1;
    scoreSpan.textContent = currentScore;
    if (currentScore === 5) declareWinner(winner);
}

function declareWinner(winner) {
    const playerScore = document.querySelector('#player-score');
    playerScore.textContent = 0;
    const computerScore = document.querySelector('#computer-score');
    computerScore.textContent = 0;
    const results = document.querySelector('#winner-string');
    results.textContent = `${winner} is the first to score 5 points and is the winner!`;
}

const buttons = document.querySelectorAll('#buttons button');
buttons.forEach(button => button.addEventListener('click', e => playRound(e.target.id)));
const playerScore = document.querySelector('#player-score');
const computerScore = document.querySelector('#computer-score');
playerScore.textContent = 0;
computerScore.textContent = 0;
