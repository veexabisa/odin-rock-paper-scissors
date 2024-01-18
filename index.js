console.log("Hi");
console.log("Ola");

let options = ["rock", "paper", "scissors"];

function getComputerChoice() {
  let choice = options[Math.floor(Math.random()) * options.length];
  return choice;
}

function checkWinner(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return "Tie";
  } else if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "rock")
  ) {
    return "Player";
  } else {
    return "Computer";
  }
}

function playRound(playerSelection, computerSelection) {
  let result = checkWinner(playerSelection, computerSelection);
  if (result == "Tie") {
    return "It's a Tie";
  } else if (result == "Player") {
    return `You win! ${playerSelection} beats ${computerSelection}`;
  } else retun`You lose!${computerSelection} beats ${playerSelection}`;
}

function getPlayerChoice() {
  let validatedInput = false;
  while (validatedInput == false) {
    let choice = prompt("rock paper scissors");
    if (choice == null) {
      continue;
    }
    let choiceInLower = choice.toLowerCase();
    if (options.includes(choiceInLower)) {
      validatedInput = true;
      return choiceInLower;
    }
  }
}

function game() {
  let score = 0;
  console.log("Welcome");
  for (let i = 0; i < 5; i++) {
    let playerSelection = getPlayerChoice();
    let computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
    if (checkWinner(playerSelection, computerSelection) == "Player") {
      scorePlayer++;
    } else if (checkWinner(playerSelection, computerSelection) == "Computer") {
      scoreComputer++;
    }
  }
  console.log("Game Over");
  if (scorePlayer > scoreComputer) {
    console.log("Player is the winner");
  } else if (scorePlayer < scoreComputer) {
    console.log("Computer is the winner");
  } else {
    console.log("We have a Tie!");
  }
}
game();
