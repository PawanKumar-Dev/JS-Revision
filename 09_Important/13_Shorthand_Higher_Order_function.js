// As we know "Higher-Order Function" is function that returns another function (or accepts functions as arguments).
const handler = function() {
  return function() {
    // Empty function (no logic)
  }
}


// Higher Order Function can be described in shorthand by using Arrow Function syntax.
const handlerTwo = () => () => {}


// These shorthand are used in middleware of Node.js or Redux extensively.
const handlerThree = (message) => () => {
  console.log(message)
}

const sayHello = handler("Hello, world!")
sayHello(); // Logs: "Hello, world!"
