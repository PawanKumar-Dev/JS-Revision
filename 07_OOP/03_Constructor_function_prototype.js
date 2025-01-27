// This is a proper "constructor function" defining.
function calculateScore(username, score) {
  this.username = username         // Assign username to 'this'
  this.score = score               // Assign score to 'this'
}

/*
"this" keyword is the global object.
When we don't use "this", there is no username or score property in global context.
Leading to undefined values being concatenated or errors if in strict mode.
*/


// Add method using prototype
calculateScore.prototype.upScore = function () {
  this.score++
}


// CalculateScore is used with "new keyword" to create a new object instance.
const newScore = new calculateScore("Pawan", 590)
const newScoreTwo = new calculateScore("Raju", 150)


// Call upScore method to increase score
newScore.upScore()


console.log(newScore)
console.log(newScoreTwo)
