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

/**
 * This is for the core game functionality. Takes the data-type value parameter of the selected button
 * and generates random computer choice from choices array
 */
 function playGame(playerChoice) {

  playerImage.src = `assets/images/player-${choices[playerChoice]}.png`;

  let computerChoice = Math.floor(Math.random() * 5);

  computerImage.src = `assets/images/computer-${choices[computerChoice]}.png`;

  let result = checkWinner(choices[playerChoice], choices[computerChoice]);

}

/**
 * Compares playerChoice and computerChoice data strings to check winner of game
 */
function checkWinner() {

}

/**
 * Take user score from the DOM and increment by 1
 */
function addUserScore() {

}

/**
 * Take computer score from the DOM and increment by 1
 */
function addComputerScore() {

}

/**
 * Launch winner / loser modal based on keeping count of player scores 
 * and triggering once score of 5 is met
 */
function trackRounds() {

}

function resetGame() {

}

function resetWinner() {

}

function resetLoser() {

}