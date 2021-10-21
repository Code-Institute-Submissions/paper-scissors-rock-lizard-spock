/* Cache DOM elements */

const buttons = document.getElementsByClassName("control");
const playerImage = document.getElementById("player-image");
const computerImage = document.getElementById("computer-image");
const choices = ["rock", "paper", "scissors", "lizard", "spock"];
const resetButton = document.getElementById("reset");
const winnerResetButton = document.getElementById("winnerReset");
const loserResetButton = document.getElementById("loserReset");
/*const winMessages = ["You are lucky today", "Well done rock star", "Superstar wins again"];*/
/*const loserMessages = ["You are unlucky today", "Well done to the computer", "Today is not your day :("];*/

/**
 * Function to run scrolling title text displaying name of game
 */
// https://stackoverflow.com/questions/16354122/
(function titleScroller(text) {
  document.title = text;
  setTimeout(function () {
    titleScroller(text.substr(1) + text.substr(0, 1));
  }, 250);
}(" | Rock | Paper | Scissors | Lizard | Spock "));

/**
 * Add event listener to all player choice buttons
 */
 for (let button of buttons) {
  button.addEventListener("click", function () {
    let playerChoice = this.getAttribute("data-type");
    playGame(playerChoice);
  });
}

function playGame() {

}

function checkWinner() {

}

function addUserScore() {

}

function addComputerScore() {

}

function trackRounds() {

}

function resetGame() {

}

function resetWinner() {

}

function resetLoser() {

}