// Lexical scoping means that a function can access variables from its own scope{} and any outer function scope where it was defined.
function outerFunc() {
  const msg = "This is data in outer function"

  function innerFunc() {
    const innerMsg = "Inner function data"
    console.log(innerMsg)
    console.log(msg)
  }
  innerFunc()
}

// outerFunc()
// Here, we can say innerFunc() method has lexical scope of outerFunc(). And can use the variables of declared in outer function.
// Since functional excution context has access to nested function, this happens becoz of lexical scoping.


// Closure = Function + Memory of where it was born(its lexical scoping).
// In below example, instead of executing inner function we returned it and when we use it in "data" variable, innerTwo() is still able to access outer function scope. This happens becoz inner function carry its own lexical scoping as well. This is called closure. 
function outerTwo() {
  const msg = "Msg in outer function"

  function innerTwo() {
    console.log("inner msg")
    console.log(msg)
  }

  return innerTwo
}

const data = outerTwo()
data()
