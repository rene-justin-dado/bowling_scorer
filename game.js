//Original
//Score 119:
// var frames = [
//   [1, 2], [6, 4], [5, 4], [10, 0], [7, 2], [10, 0], [10, 0], [5, 2], [7, 0], [4, 4]
// ]
// 3, 9, 13, 18, 27, 37, 55, 65, 85, 92, 99, 106, 114

var frames = [
  [1, 2], [6, 4], [5, 4], [10, 0], [7, 2], [10, 0], [10, 0], [5, 2], [7, 0], [4, 4]
]

var total = 0
var strike = 0
var spare = 0

frames.forEach(function(element, index) {
  if (strike === 10) {
    total += element[0] + element[1]
    console.log ('strikes count the next frame')
  }
  element.reduce(function(prev, current, index, frames) {
    //adds current ball to next ball
  
    total += element[index]
    
    //Checks for a strike
    if (element[0] === 10) {
      strike = 10
      //Should only show above an iteration with a strike
      console.log('this is a strike', strike)
    }
    //Checks for a spare
    if (element[0] !== 10 && element[0] + element[1] === 10){ 
      spare = 10
      //Should only show above an iteration with a spare
      console.log('this is a spare')
    }
    //This is for understanding the reduce parameters. Element is the current element in the array that forEach is looping through
    console.log (prev, current, index, 'Score: ' + total, 'Element is ' + element)
  }, element)
})


//Test2
// Score 141:
//
// var frames = [
//   [1, 2], [6, 4], [5, 4], [10, 0], [7, 2], [10, 0], [10, 0], [5, 2], [7, 0], [10, 10, 10]
// ]
