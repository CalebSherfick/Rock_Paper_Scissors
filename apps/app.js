console.log('Start')





// function computerChoice() {
//   // Math.floor(Math.random() * );
// }

let comOptions = {
  punch: 'punch',
  slap: 'slap',
  eyes: 'eyes'
}

let computerChoice = ''

function setComputerChoice() {
  let choices = Object.keys(comOptions)
  let choiceIndex = Math.floor(Math.random() * choices.length)
  let choice = choices[choiceIndex]
  return choice
}


let resultStr = 'waiting for game to be played'


function play(playerChoice) {
  computerChoice = setComputerChoice()
  if (playerChoice == 'punch') {
    if (computerChoice == 'punch') {
      resultStr = "You TIED: You fist bumped each other..."
    } else if (computerChoice == 'slap') {
      resultStr = "You LOST: They caught your punch in their hand!"
    } else {
      resultStr = "You WON: You knocked them in the head!"
    }
  } else if (playerChoice == 'slap') {
    if (computerChoice == 'punch') {
      resultStr = "You WON: You caught their punch in your hand!"
    } else if (computerChoice == 'slap') {
      resultStr = "You TIED: You high fived each other..."
    } else {
      resultStr = "You LOST: They poked you in the eyes!"
    }
  } else if (playerChoice == 'eyes') {
    if (computerChoice == 'punch') {
      resultStr = "You LOST: They punched you in the face!"
    } else if (computerChoice == 'slap') {
      resultStr = "You WON: You countered their slap with an eye poke!"
    } else {
      resultStr = "You TIED: You poked each other in the eyes..."
    }
  }
  computerResult()
}


function computerResult() {
  document.getElementById('result').innerHTML = `
  <h1>Your opponent chose ${computerChoice}.</h1>
  <h2>${resultStr}</h2>`
}
// computerResult()



console.log('Finish')