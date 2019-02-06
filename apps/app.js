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
      window.alert("You TIED: You fists bumped each other...")
    } else if (computerChoice == 'paper') {
      window.alert("You LOST: They caught your punch in their hand!")
    } else {
      window.alert("You WON: You knocked them in the head!")
    }
  } else if (playerChoice == 'paper') {
    if (computerChoice == 'rock') {
      window.alert("You WON: You caught their punch in your hand!")
    } else if (computerChoice == 'paper') {
      window.alert("You TIED: You high fived each other...")
    } else {
      window.alert("You LOST: They poked you in the eyes!")
    }
  } else if (playerChoice == 'scissors') {
    if (computerChoice == 'rock') {
      window.alert("You LOST: They punched you in the face!")
    } else if (computerChoice == 'paper') {
      window.alert("You WON: You countered their slap with an eye poke!")
    } else {
      window.alert("You TIED: You poked each other in the eyes...")
    }
  }

}


function computerResult(weapon) {
  document.getElementById('result').innerHTML = `
  <h1>Test</h1>`
}


// function makeSound(animal) {
//   document.getElementById('result').innerHTML = `
//   <h1>The ${animal} Says: ${animalSounds[animal.toLowerCase()].sound}</h1>
//   <img class="animal-pic" src="${animalSounds[animal].img}"/>
//   `
// }





console.log('Finish')