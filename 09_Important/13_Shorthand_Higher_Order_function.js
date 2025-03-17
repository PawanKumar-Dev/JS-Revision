// As we know "Higher-Order Function" is function that returns another function (or accepts functions as arguments).
const handler = function() {
  return function() {
    // Empty function (no logic)
  }
}


// Higher Order Function can be described in shorthand by using Arrow Function syntax.
  // `const handlerTwo = () => ` This is the outer function which is returning inner function.
  // `() => {}` This is the inner function which is being returned to outer function.

const handlerTwo = () => () => {}


// For example:
// These shorthand are used in middleware of Node.js or Redux extensively.
const handlerThree = (message) => () => {
  console.log(message)
}

const sayHello = handler("Hello, world!")
sayHello(); // Logs: "Hello, world!"


// But then it raises a question: Can't we just return the message in first function. Why bother with second inner fuction?
// When do the below our msg is logged immediatley with no control over when it logs.
const handler = (message) => {
  console.log(message)
}
handler("Hello, world!")


// But when we use inner function, which uses clousure concept of JS, we can excute our msg logging when we want.
// Becoz `handler("our message")` doesn't log the message.
// Instead we have to call `sayHello`.

// This pattern is especially valuable in event handling, asynchronous operations, or any scenario where you need to set up a behavior in advance and trigger it later.

Step 1: Create the function with a message
  handler("Hello, world!")
         │
         ▼
Returns a new function (inner function) that "remembers" the message.

Step 2: Later, call this returned function
  sayHello();  // Logs "Hello, world!" using the remembered message.







