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
