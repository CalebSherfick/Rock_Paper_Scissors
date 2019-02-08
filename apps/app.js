console.log('Start')





// function computerChoice() {
//   // Math.floor(Math.random() * );
// }
let playerWins = 0;
let compWins = 0;
let tieCount = 0;


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
      tieCount++;
    } else if (computerChoice == 'slap') {
      resultStr = "You LOST: They caught your punch in their hand!"
      compWins++;
    } else {
      resultStr = "You WON: You knocked them in the head!"
      playerWins++;
    }
  } else if (playerChoice == 'slap') {
    if (computerChoice == 'punch') {
      resultStr = "You WON: You caught their punch in your hand!"
      playerWins++;
    } else if (computerChoice == 'slap') {
      resultStr = "You TIED: You high fived each other..."
      tieCount++;
    } else {
      resultStr = "You LOST: They poked you in the eyes!"
      compWins++;
    }
  } else if (playerChoice == 'eyes') {
    if (computerChoice == 'punch') {
      resultStr = "You LOST: They punched you in the face!"
      compWins++;
    } else if (computerChoice == 'slap') {
      resultStr = "You WON: You countered their slap with an eye poke!"
      playerWins++;
    } else {
      resultStr = "You TIED: You poked each other in the eyes..."
      tieCount++;
    }
  }
  fightPrompt()
  computerResult()
  scoreKeeper()
}


function computerResult() {
  document.getElementById('result').innerHTML = `<h3>Your opponent chose ${computerChoice}.</h3>
  <h3>${resultStr}</h2>`
}

function fightPrompt() {
  document.getElementById('goAgain').innerText = `Go ahead and make another move`
}




function scoreKeeper() {
  document.getElementById('playerWins').innerText = `Strikes Landed: ${playerWins}`
  document.getElementById('tieCount').innerText = `Ties: ${tieCount}`
  document.getElementById('compWins').innerText = `Times Hit: ${compWins}`
}




console.log('Finish')