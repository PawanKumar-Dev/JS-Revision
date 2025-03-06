// In JS there are 3 ways to declare variables.

const accountId = 458079

let userName = "Pawan"

var emaiID = "pawan@gmail.com"


// Usage of "var" keyword is not encourged since it has functional scope(if inside a function) but if outside a function then it has global scope.
// When declared globally, "var" become properties of the global object(in case of browser Window), increasing the risk of naming conflicts with other scripts or libraries. (this conflict is called Variable leakage)

// "let" and "const" are modern way to declare variables. They have a block scope.
// When declared in the global scope(i.e. outside of a function or {} scope), "let" and "const" create global variables. However, unlike var, they do not become properties of the global object.


isPresent = true

// When we don't have an explicit declaration, then "var" keyword is used by default. So avoid such declaration.
