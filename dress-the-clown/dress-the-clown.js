// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Dress The Clown!')

let head = document.getElementById('head')
let body = document.getElementById('body')
let feet = document.getElementById('feet')

document.onkeydown = checkKey

function checkKey(e) {
  console.log(e.keyCode)
  if (e.keyCode == '38') {
    // up arrow
    changeBodyPartIndex(e.keyCode)
    console.log('up')
  } else if (e.keyCode == '40') {
    // down arrow
    console.log('down')
    changeBodyPartIndex(e.keyCode)

    ////////////////////////////////////////////////////
    ///////////////////////////////////////////////////
  } else if (e.keyCode == '37') {
    // left arrow
    console.log('left')
    if (bodyPartArray[currentBodyPartIndex] == 'head') {
      changeClownHead(e.target, e.keyCode)
    } else if (bodyPartArray[currentBodyPartIndex] == 'body') {
      changeBodyPart(e.target, e.keyCode)
    } else if (bodyPartArray[currentBodyPartIndex] == 'feet') {
      changeFeetPart(e.target, e.keyCode)
    }
  } else if (e.keyCode == '39') {
    // right arrow
    console.log('right')
    if (bodyPartArray[currentBodyPartIndex] == 'head') {
      changeClownHead(e.target, e.keyCode)
    } else if (bodyPartArray[currentBodyPartIndex] == 'body') {
      changeBodyPart(e.target, e.keyCode)
    } else if (bodyPartArray[currentBodyPartIndex] == 'feet') {
      changeFeetPart(e.target, e.keyCode)
    }
  }
}

//head, body and feet index//

let headIndex = 0
let bodyIndex = 0
let feetIndex = 0
let currentBodyPartIndex = 0
let bodyPartArray = ['head', `body`, `feet`]

//create a variable to store the current number of the head imag

function changeBodyPartIndex(keyCode) {
  console.log(
    currentBodyPartIndex,
    'hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii'
  )
  if (keyCode == '38') {
    currentBodyPartIndex--
    if (currentBodyPartIndex > 2) {
      currentBodyPartIndex = 0
    }
  } else if (keyCode == '40') {
    currentBodyPartIndex++
    if (currentBodyPartIndex < 0) {
      currentBodyPartIndex = 2
    }
  }
}

//Change head ///

function changeClownHead(e, keyCode) {
  let headSrc = './images/head' + headIndex + '.png'
  console.log('keycode: ', keyCode)

  head.src = headSrc

  if (keyCode == '39') {
    console.log('in the RIGHT conditional')
    headIndex++
    if (headIndex > 4) {
      headIndex = 0
    }
  }

  if (keyCode == '37') {
    console.log('in the LEFT conditional')
    headIndex--

    if (headIndex < 0) {
      headIndex = 4
    }
  }
}

//Change the body part //

function changeBodyPart(e, keyCode) {
  let bodySrc = './images/body' + bodyIndex + '.png'
  console.log('keycode: ', keyCode)

  body.src = bodySrc

  if (keyCode == '39') {
    console.log('in the RIGHT conditional')
    bodyIndex++
    if (bodyIndex > 4) {
      bodyIndex = 0
    }
  }

  if (keyCode == '37') {
    console.log('in the LEFT conditional')
    bodyIndex--
    if (bodyIndex < 0) {
      bodyIndex = 4
    }
  }
}

//Change the feet//

function changeFeetPart(e, keyCode) {
  let feetSrc = './images/shoes' + feetIndex + '.png'
  console.log('keyCode: ', keyCode)

  feet.src = feetSrc

  if (keyCode == '39') {
    console.log('in the RIGHT conditional')
    feetIndex++
    if (feetIndex > 4) {
      feetIndex = 0
    }
  }

  if (keyCode == '37') {
    console.log('in the LEFT conditional')
    feetIndex--
    if (feetIndex < 0) {
      feetIndex = 4
    }
  }
}
