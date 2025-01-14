// Functions can be created two ways:
// Function Declaration(Normal JS way)

add(4, 5)  // This works because add() function is hoisted.

function add(a, b) {
    return a + b
}


// But when we use Function Expression, Hoisting won't work. This gives error: "ReferenceError: Cannot access 'subtract' before initialization"
subtract(9,4)

let subtract = function(a, b) {
    return b - a
}