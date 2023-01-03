
function playRound (playerSelection, computerSelection){
// your code here!
let winner = null;
let playerScore = 0;
let computerScore = 0
let computerSelection = getComputerChoice();
let playerSelection = playerSelection();
  if(playerSelection > computerSelection){
    winner = "Player 1 is Champion ";
  }
  else if(computerSelection > playerSelection){
    winner = "Player 2 is Champion ";
  }

  return winner + "You Lose! Paper beats Rock"
}
//const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));


function getComputerChoice() {
let cpuPoints = 0;
let x = Math.floor(Math.random() * 3);
let y = "";
if( x === 0){
  let y = "Rock";
  console.log("Computer Choice : ", y);
}
else if(x === 1){
let  y =  "Paper";
console.log("Computer Choice : ",y)
}
else {
  x = 2;
let  y = "Scissors"
  console.log("Computer Choice : ", y)
}

}

function playerSelection(){
let playerPoints = 0;
let playerSelect = onclick();
let playerchoice = null;
let rock = document.getElementById("Rock");
let paper = document.getElementById("Paper");
let scissors = document.getElementById("Scissors");

if(playerSelect === rock ){
  playerchoice = 0;

}
else if(playerSelect === paper){
  playerchoice = 1;
}
else if (playerSelect === scissors) {
  playerchoice = 2
}


}
