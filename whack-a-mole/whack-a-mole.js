// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Whack-a-Mole!')

var rowLen = document.getElementById('mole-table').rows[0].cells.length
// console.log(`im in the td`, rowLen)

var row0 = document.getElementById('mole-table').rows[0].cells
// [0,0,0,0,0]
var row1 = document.getElementById('mole-table').rows[1].cells
var row2 = document.getElementById('mole-table').rows[2].cells
var row3 = document.getElementById('mole-table').rows[3].cells
var row4 = document.getElementById('mole-table').rows[4].cells

let gameBoard = [row0, row1, row2, row3, row4]

console.log(`im in the gameBoard`, gameBoard)
//cells = 2d array 5x5 whack a mole board

// gameBoard[0][0].innerHTML = `hi`
//adds content into the cell

function functionToGetRandomNumber() {
  gameBoard[Math.floor(Math.random() * gameBoard.length)]
  console.log(gameBoard)
  return gameBoard
}
