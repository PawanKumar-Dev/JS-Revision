// Spread Operator( ...) :- Used in places where you want to expand or spread an iterable (like array, or object) into individual elements.
// Function Calls: Expanding an array into individual arguments.

function sumOfAllNums(...nums) {
  nums.map((item) => item += item)
}

console.log(sumOfAllNums(1, 2, 3))

/*  Array Literals: Combining or copying arrays.
  Object Literals: Merging objects or creating a shallow copy.
*/
