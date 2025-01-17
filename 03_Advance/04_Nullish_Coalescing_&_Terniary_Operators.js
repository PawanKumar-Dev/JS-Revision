// Nullish Coalescing Operator (??) checks for "null" and "undefined" value. If they exist our next value is used.
// Returns 10, since first value is "null"
const val1 = null ?? 10
console.log(val1)

// Returns 15, since first value is "undefined"
const val2 = undefined ?? 15
console.log(val2)

// But if null/undefined is missing, our first value will get returned i.e. 20
const val3 = 20 ?? 56
console.log(val3)


// Ternary operator is short form of if-else
// condition ? true : false
const price = 151
price < 150 ? console.log("Price less than 150") : console.log("Price more than 150")
