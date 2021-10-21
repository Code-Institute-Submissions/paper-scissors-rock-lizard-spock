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

  checkWinner(result);
  trackRounds();
}

/**
 * Compares playerChoice and computerChoice data strings to check winner of game
 */
function checkWinner(playerChoice, computerChoice) {
  /* If player chooses rock */
  if (playerChoice === "rock" && computerChoice === "rock") {
    document.getElementById("messages").innerHTML = "Draw!";
  }
  else if (playerChoice === "rock" && computerChoice === "paper") {
    document.getElementById("messages").innerHTML = "You Lose! Paper Covers Rock";
    addComputerScore();
  }
  else if (playerChoice === "rock" && computerChoice === "scissors") {
    document.getElementById("messages").innerHTML = "You Win! Rock Crushes Scissors";
    addUserScore();
  }
  else if (playerChoice === "rock" && computerChoice === "lizard") {
    document.getElementById("messages").innerHTML = "You Win! Rock Crushes Lizard";
    addUserScore();
  }
  else if (playerChoice === "rock" && computerChoice === "spock") {
    document.getElementById("messages").innerHTML = "You Lose! Spock Vaporizes Rock";
    addComputerScore();
  }
  /* If chooses paper */
  else if (playerChoice === "paper" && computerChoice === "paper") {
    document.getElementById("messages").innerHTML = "Draw!";
  }
  else if (playerChoice === "paper" && computerChoice === "rock") {
    document.getElementById("messages").innerHTML = "You Win! Paper Covers Rock";
    addUserScore();
  }
  else if (playerChoice === "paper" && computerChoice === "scissors") {
    document.getElementById("messages").innerHTML = "You Lose! Scissors Cuts Paper";
    addComputerScore();
  }
  else if (playerChoice === "paper" && computerChoice === "lizard") {
    document.getElementById("messages").innerHTML = "You Lose! Lizard Eats Paper";
    addComputerScore();
  }
  else if (playerChoice === "paper" && computerChoice === "spock") {
    document.getElementById("messages").innerHTML = "You Win! Paper Disproves Spock";
    addUserScore();
  }
  /* If player chooses scissors */
  else if (playerChoice === "scissors" && computerChoice === "scissors") {
    document.getElementById("messages").innerHTML = "Draw!";
  }
  else if (playerChoice === "scissors" && computerChoice === "rock") {
    document.getElementById("messages").innerHTML = "You Lose! Rock Crushes Scissors";
    addComputerScore();
  }
  else if (playerChoice === "scissors" && computerChoice === "paper") {
    document.getElementById("messages").innerHTML = "You Win! Scissors Cuts Paper";
    addUserScore();
  }
  else if (playerChoice === "scissors" && computerChoice === "lizard") {
    document.getElementById("messages").innerHTML = "You Win! Scissors Decapitates Lizard";
    addUserScore();
  }
  else if (playerChoice === "scissors" && computerChoice === "spock") {
    document.getElementById("messages").innerHTML = "You Lose! Spock Smashes Scissors";
    addComputerScore();
  }
  /* If player chooses lizard */
  else if (playerChoice === "lizard" && computerChoice === "lizard") {
    document.getElementById("messages").innerHTML = "Draw!";
  }
  else if (playerChoice === "lizard" && computerChoice === "rock") {
    document.getElementById("messages").innerHTML = "You Lose! Rock Crushes Lizard";
    addComputerScore();
  }
  else if (playerChoice === "lizard" && computerChoice === "paper") {
    document.getElementById("messages").innerHTML = "You Win! Lizard Eats Paper";
    addUserScore();
  }
  else if (playerChoice === "lizard" && computerChoice === "scissors") {
    document.getElementById("messages").innerHTML = "You Lose! Scissors Decapitates Lizard";
    addComputerScore();
  }
  else if (playerChoice === "lizard" && computerChoice === "spock") {
    document.getElementById("messages").innerHTML = "You Win! Lizard Poisons Spock";
    addUserScore();
  }
  /* If player chooses spock */
  else if (playerChoice === "spock" && computerChoice === "spock") {
    document.getElementById("messages").innerHTML = "Draw!";
  }
  else if (playerChoice === "spock" && computerChoice === "rock") {
    document.getElementById("messages").innerHTML = "You Win! Spock Vaporizes Rock ";
    addUserScore();
  }
  else if (playerChoice === "spock" && computerChoice === "paper") {
    document.getElementById("messages").innerHTML = "You Lose! Paper Disproves Spock";
    addComputerScore();
  }
  else if (playerChoice === "spock" && computerChoice === "scissors") {
    document.getElementById("messages").innerHTML = "You Win! Spock Smashes Scissors";
    addUserScore();
  }
  else if (playerChoice === "spock" && computerChoice === "lizard") {
    document.getElementById("messages").innerHTML = "You Lose! Lizard Poisons Spock";
    addUserScore();
  }
}

/**
 * Take user score from the DOM and increment by 1
 */
function addUserScore() {
  let oldScore = parseInt(document.getElementById("player-score").textContent);
  document.getElementById("player-score").textContent = ++oldScore;
}

/**
 * Take computer score from the DOM and increment by 1
 */
function addComputerScore() {
let oldScore = parseInt(document.getElementById("computer-score").textContent);
document.getElementById("computer-score").textContent = ++oldScore;
}

/**
 * Launch winner / loser modal based on keeping count of player scores 
 * and triggering once score of 5 is met
 */
function trackRounds() {
  let playerScore = parseInt(document.getElementById("player-score").textContent);
  let computerScore = parseInt(document.getElementById("computer-score").textContent);
  /* https://stackoverflow.com/questions/10233550 */
  let winnerModal = new bootstrap.Modal(document.getElementById("winnerModal"), {});
  let loserModal = new bootstrap.Modal(document.getElementById("loserModal"), {});

  if (playerScore === 5) {
    winnerModal.show();
  } else if (computerScore === 5) {
    loserModal.show();
  }
}

/* Add event listener to reset button on top of page */
resetButton.addEventListener("click", resetFunction);
/**
 * Resets the page when reload button selected
 */
function resetFunction() {
  location.reload();
}

/* Add event listener to reset at the bottom of winner modal */
winnerResetButton.addEventListener("click", resetWinnerFunction);
/**
 * Trigger reload page button at bottom of winner modal
 */
function resetWinnerFunction() {
  location.reload();
}

function resetLoser() {

}