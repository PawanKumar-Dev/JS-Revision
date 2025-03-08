// Spread Operator: Used in places where you want to expand or spread an iterable (like array, object) into individual elements.

// Function Calls: Expanding an array into individual arguments when calling a function is common use (...)Spread Operator.
const arr = [1, 2, 3]
function multiply(a, b, c) {
    return a * b * c
}
console.log(multiply(...arr))


// Array Literals: Combining or copying arrays is another common use of (...)Spread Operator.
let arr1 = [7, "apple", true, 19, "hello", false, 3.5, "GPT", 10, null]
let arr2 = ["start", "end"]

let arr3 = [...arr2, arr1]
console.log(arr3)

/*
Object Literals: Merging objects or creating a shallow copy.
*/
