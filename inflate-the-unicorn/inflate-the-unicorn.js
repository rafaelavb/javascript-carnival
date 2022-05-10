// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

// console.log('Inflate The Unicorn!')
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
    if (clickCount0 > 2) {
      alert('Unicorn 1 says says thank you!')
    } else {
      // console.log('unicorn0')
      clickCount0++
      // console.log(clickCount0)
      eventTarget.src = './images/unicorn-' + clickCount0 + '.png'
    }
  } else if (eventTarget.id == 'unicorn1') {
    if (clickCount1 > 2) {
      alert('Unicorn 2 says says thank you!')
    } else {
      // console.log('unicorn1')
      clickCount1++
      // console.log(clickCount1)
      eventTarget.src = './images/unicorn-' + clickCount1 + '.png'
    }
  } else if (eventTarget.id == 'unicorn2') {
    if (clickCount2 > 2) {
      alert('Unicorn 3 says says thank you!')
    } else {
      // console.log('unicorn2')
      clickCount2++
      // console.log(clickCount2)
      eventTarget.src = './images/unicorn-' + clickCount2 + '.png'
    }
  }
}
