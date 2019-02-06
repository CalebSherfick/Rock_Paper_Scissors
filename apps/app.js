console.log('Start')

function play(playerChoice, computerChoice) {
  // let computerChoice = rock
  if (playerChoice == 'rock') {
    if (computerChoice == 'rock') {
      return "Woah, you TIED!"
    } else if (computerChoice == 'paper') {
      return "You LOST, it's a wrap!"
    } else {
      return "You WON, you crushed em'!"
    }
  }

}

console.log(play("rock", "scissors"))





console.log('Finish')