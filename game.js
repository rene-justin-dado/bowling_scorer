//Original
//Score 119:
// var frames = [
//   [1, 2], [6, 4], [5, 4], [10, 0], [7, 2], [10, 0], [10, 0], [5, 2], [7, 0], [4, 4]
// ]

var frames = [
  [1, 2], [6, 4], [5, 4], [10, 0], [7, 2], [10, 0], [10, 0], [5, 2], [7, 0], [4, 4]
]

var total = 0
frames.forEach(function(element) {
  element.reduce(function(prev, current, index, frames) {
    var strike = 0
    var spare = 0
    //adds current ball to next ball
    if (strike === 10) {
      (element [0] + element [1]) * 2
      console.log ('strikes count the next frame')
    }
    total += element[index]
    
    if (element[0] === 10) {
      strike = 10
      console.log('this is a strike')
    }
    if (element[0] !== 10 && element[0] + element[1] === 10){ 
      spare = 10
      console.log('this is a spare')
    }
    console.log (prev, current, index, 'Score: ' + total, 'Element is ' + element)
  }, element)
})


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
