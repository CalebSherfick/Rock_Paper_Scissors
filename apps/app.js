console.log('Start')





// function computerChoice() {
//   // Math.floor(Math.random() * );
// }

let comOptions = {
  rock: 'rock',
  paper: 'paper',
  scissors: 'scissors'
}


function setComputerChoice() {
  let choices = Object.keys(comOptions)
  let choiceIndex = Math.floor(Math.random() * choices.length)
  let choice = choices[choiceIndex]
  return choice
}



function play(playerChoice) {
  let computerChoice = setComputerChoice()
  //resultStr variable = ''
  if (playerChoice == 'rock') {
    if (computerChoice == 'rock') {
      window.alert("Woah, you TIED!")
    } else if (computerChoice == 'paper') {
      window.alert("You LOST, it's a wrap!")
    } else {
      window.alert("You WON, you crushed em'!")
    }
  } else if (playerChoice == 'paper') {
    if (computerChoice == 'rock') {
      window.alert("You WON, they got smothered!")
    } else if (computerChoice == 'paper') {
      window.alert("Woah, you TIED!")
    } else {
      window.alert("You LOST, cut it out!")
    }
  } else if (playerChoice == 'scissors') {
    if (computerChoice == 'rock') {
      window.alert("You LOST, they crushed you!")
    } else if (computerChoice == 'paper') {
      window.alert("You WON, you cut them to shreds!")
    } else {
      window.alert("Woah, you TIED!")
    }
  }

}


// console.log(play(playerChoice, computerChoice))





console.log('Finish')