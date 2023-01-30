const buttons = document.querySelectorAll('input')
let playerScore = 0
let computerScore = 0

// Disable buttons
function disableButtons() {
    buttons.forEach(element => {
        element.disabled = true
    })
}

// Allows the computer to randomly Choose between Rock, Paper, or Scissors
function computerPlay() {
    let choices = ['rock', 'paper', 'scissors']
    return choices[Math.floor(Math.random() * choices.length)]
}


// For Each button adds event listener To Call Play Round
buttons.forEach(button => {
    button.addEventListener('click', function(){
        playRound(button.value)
    })
})







//Plays Actual Round of Game

function playRound(playerChoice) {

let computerChoice = computerPlay();

let scoreCard = ""

//Player Winning Outcomes
  if((playerChoice  == 'rock' && computerChoice == 'scissors')||
      (playerChoice == 'scissors' && computerChoice == 'paper')||
      (playerChoice == 'paper' && computerChoice == 'rock'))
  {
    playerScore += 1;
    scoreCard = (" You Win Congrats! " + playerChoice + " Beats " + computerChoice + " everytime! " + "<br>"
    + "<br> Computer Score : " + computerScore + "<br> Player Score : " + playerScore);

//Gameover Stopping point
    if (playerScore == 7) {
      scoreCard += '<br><br>You won the game! Reload the page to play again'
        disableButtons()
    }

}
//PC Winning Options
else if ((playerChoice == 'rock' && computerChoice  == 'paper') ||
        (playerChoice == 'scissors' && computerChoice  == 'rock') ||
        (playerChoice == 'paper' && computerChoice == 'scissors')){

          computerScore += 1


          scoreCard = ("<br><br> You Lose! " + computerChoice +  " Beats "+ playerChoice + " <br>Computer Score : " + computerScore + " <br>Player Score : " + playerScore );
//Stoppping Point PC Wins
          if(computerScore == 7){
            scoreCard += "<br> <br>Bots Rule The World Lets Play Again!"
            disableButtons()
          }

  }

else {

//Tie Outcome
  scoreCard = ( "<br>Computer and Human have Chose The same option? Its a Draw. <br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore)

}

document.getElementById('scoreCard').innerHTML = scoreCard
  return

}
