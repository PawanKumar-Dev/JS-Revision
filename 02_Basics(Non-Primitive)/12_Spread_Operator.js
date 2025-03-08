// Spread Operator: Used in places where you want to expand or spread an iterable (like array, object) into individual elements.

// Function Calls: Expanding an array into individual arguments when calling a function is common use (...)Spread Operator.
const arr = [1, 2, 3]
function multiply(a, b, c) {
    return a * b * c
}
console.log(multiply(...arr))

/*
Array Literals: Combining or copying arrays.
Object Literals: Merging objects or creating a shallow copy.
*/
