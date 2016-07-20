//Score 119:

var frames = [
  [1, 2], [6, 4], [5, 4], [10, 0], [7, 2], [10, 0], [10, 0], [5, 2], [7, 0], [4, 4]
]

var total = 0
frames.reduce(function(prev, current, index, frames) {
    if(prev[0] === 10) {
      var strike = prev.reduce(function (ball1, ball2) {ball1 + ball2})
      console.log(strike, ' is a strike')
    } else if (prev[0] !== 10 && prev + current === 10) {
      var spare = prev.reduce(function ())
      console.log()
    }
    console.log(prev, current, index, frames.length)
})
console.log(total)

// if(a === 10) {
//   strike + (a + b)
//   strike.push(10)
// }
// if(a + b === 10 && a !== 10) {
//   spare + a
//   spare.push(10)
// }
// total.push(a + b)

//create arrays to store score ie arr = total
// LOOP through frames
// store strikes spares and reg score in seperate variables
// add numbers at current index of array
// IF certain variable(strike, spare) is acheived, add to previous score in specific fashion
// IF no strike or spare occurs, add as normal
// IF returned total is === to score, end operations

// Score 141:
//
// var frames = [
//   [1, 2], [6, 4], [5, 4], [10, 0], [7, 2], [10, 0], [10, 0], [5, 2], [7, 0], [10, 10, 10]
// ]
