// Rest Operator( ...) :- Used in places where you want to collects multiple arguments into a single array.
// Once array is compiled. We can use various built in methods like map(), forEach() or reduce() to loop over.

// Example where (...)Rest Operator is used are:
// 1. Function Parameters: When defining a function, using ... in the parameters collects all arguments into an array.
function sumOfAllNums(...nums) {
    let total = 0
    nums.forEach((item) => total += item )
    return total
}
console.log(sumOfAllNums(1, 2, 3))


// Destructuring Assignments: When extracting values from an array or object and you want to group the "remaining" elements/properties.
