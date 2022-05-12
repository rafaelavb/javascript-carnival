// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Whack-a-Mole!')

var rowLen = document.getElementById('mole-table').rows[0].cells.length

var row0 = document.getElementById('mole-table').rows[0].cells
var row1 = document.getElementById('mole-table').rows[1].cells
var row2 = document.getElementById('mole-table').rows[2].cells
var row3 = document.getElementById('mole-table').rows[3].cells
var row4 = document.getElementById('mole-table').rows[4].cells
//gameboard ='s an array or rows 0,1,2,3,4
let gameBoard = [row0, row1, row2, row3, row4]

console.log(`im in the gameBoard`, gameBoard)
//cells = 2d array 5x5 whack a mole board

// gameBoard[0][0].innerHTML =
//adds content into the cell

//Set the intial position of the mole. Pick random cell and put the mole image in it
let initialRandomRow = gameBoard[Math.floor(Math.random() * gameBoard.length)]
//randomRow = gameBoard rows. It picks a row at random using math random, then it ronds to he nearest
//whole number with Math.foor. it randomizes through gameBoard length (4)
let initialRandomCellOfRow =
  initialRandomRow[Math.floor(Math.random() * initialRandomRow.length)]
//randomCellOfRow = random cell in the already gotten random row in randomRow. We take the random
//row from the first calc and insert it into our next calc. It will take the random row and then
//go through the aray and take a random cell out of the row.

initialRandomCellOfRow.appendChild(document.getElementById('mole'))

function moveMole(e) {
  let randomRow = gameBoard[Math.floor(Math.random() * gameBoard.length)]
  let randomCellOfRow =
    randomRow[Math.floor(Math.random() * initialRandomRow.length)]
  var audio = new Audio()
  audio.src = 'whack-audio.wav'
  audio.play()

  randomCellOfRow.appendChild(document.getElementById('mole'))
}
