function createUsername(username) {
  this.username = username
  console.log("createUsername called")
}

function createUser(username, password) {
  createUsername(username)
  this.password = password
}

const userOne = new createUser("Shayam", 789)
console.log(userOne)


// In above case, we don't get our username. Becoz as soon as createUsername() stack is called.
// It get processed inside our "call-stack" and our processed data is deleted. And never get transferred to createUser() stack.
// To solve this issue, which is happening becoz of "this" keyword context.

// call() method  is used for controlling the value of "this" keyword.
// Meaning, by default, "this" refers to the current context/scope that calls it. But with "call()" method, you can control what "this" keyword refers to.


function createUsernameTwo() {
  this.username = username
  console.log("createUsernameTwo called")
}

function createUserTwo(username, password) {
  createUsernameTwo.call(this, username)
  this.password = password
}

const userTwo = new createUserTwo("Raju", 456)
console.log(userTwo)
