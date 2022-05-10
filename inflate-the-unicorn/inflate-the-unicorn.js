// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Inflate The Unicorn!')
let unicorn = document.getElementsByClassName('inflate-an-image')
let unicorn0 = document.getElementById('unicorn0')
let unicorn1 = document.getElementById('unicorn1')
let unicorn2 = document.getElementById('unicorn2')

let clickCount0 = 0
let clickCount1 = 0
let clickCount2 = 0

for (var i = 0; i < unicorn.length; i++) {
  unicorn[i].onclick = clickUnicorn
}

function clickUnicorn(event) {
  var eventTarget = event.target
  if (eventTarget.id == 'unicorn0') {
    console.log('unicorn0')
    clickCount0++
    console.log(clickCount0)
    eventTarget.src = './images/unicorn-' + clickCount0 + '.png'

    //nest an if statement in here, if the click count gets to high set click count back to 0

    //set back to 0 with if statement and then also go alert "fasddh

    console.log(eventTarget)
  }
}

function clickUnicorn1(event) {
  var eventTarget = event.target
  if (eventTarget.id == 'unicorn1') {
    console.log('unicorn1')
    clickCount1++
    console.log(clickCount1)
    eventTarget.src = './images/unicorn-' + clickCount1 + '.png'

    //nest an if statement in here, if the click count gets to high set click count back to 0

    //set back to 0 with if statement and then also go alert "fasddh

    console.log(eventTarget)
  }
}

//get an array containing unicorns the unicorns

//bind

// var imgArray = new Array()

// imgArray[0] = new Image()
// imgArray[0].src = './images/unicorn-0.png'

// imgArray[1] = new Image()
// imgArray[1].src = './images/unicorn-1.png'

// imgArray[2] = new Image()
// imgArray[2].src = './images/unicorn-2.png'

// imgArray[3] = new Image()
// imgArray[3].src = './images/unicorn-3.png'

// function changeImage(element) {
//   console.log(
//     changeImage,
//     'I have been clicked and in the first part of the function'
//   )

//   var img = document.getElementById(element)

//   for (var i = 0; i < imgArray.length; i++) {

//     console.log('this is the array ', imgArray)

//     if (imgArray[i].src == img.src) {
//       if (i === imgArray.length) {

//         document.getElementById(element).src = imgArray[0].src
//         break
//       }

//       document.getElementById(element).src = imgArray[i + 1].src
//       break
//     }
//   }
// }
