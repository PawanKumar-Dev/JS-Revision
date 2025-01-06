// Similar to Strings, number can be converted to Number Object when using keyword "new Number()" or via autoboxing/type-corcion.
let score = 100
console.log(score)
console.log(typeof(score))


// This is Number Object. Hence we can use certain methods on it.
let scoreNumber = new Number(500.00594)
console.log(scoreNumber)
console.log(typeof(scoreNumber))

// Only returns upto given decimal position. The toFixed() method rounds the number using standard rounding rules (0-4 rounds down, 5-9 rounds up).
// always returns a string datatype, not a numeric datatype.
console.log(scoreNumber.toFixed(1))
console.log(scoreNumber.toFixed(2))

console.log(typeof(scoreNumber.toFixed(2)))

// All methods in Number returns string represtation.