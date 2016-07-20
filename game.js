//Score 119:

var frames = [
  [1, 2], [6, 4], [5, 4], [10, 0], [7, 2], [10, 0], [10, 0], [5, 2], [7, 0], [4, 4]
]

total = []
strike = []
spare = []

//for (var i = 0; i < frames.length; i++)
  frames.map(function(elements){
    elements.reduce(function(a, b) {
      if(a + b !== 10) {
        total.push(a + b)
      }
      if(a === 10) {
        strike + (a + b)
        strike.push(10)
      }
      if(a + b === 10 && a !== 10) {
        spare + a
        spare.push(10)
      }
      total.push(a + b)
    })
  })
console.log(total, strike, spare)


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
