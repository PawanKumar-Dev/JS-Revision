// Array is a variable that can store multiple values. They can be same datatypes or mix.
// Array in JS are resizable and their copy-operations are shallow-copy.
// Shallow copy means "Call by Reference" and being store in Heap memory. And so any method will directly affect the original array.

const myArray = [0, 1, 2, 3, 4]

console.log(myArray)
console.log(myArray[0])  //Access single data inside array


// Some common array methods are: push(), pop()
const heroes = ["Ironman", "Spiderman", "Captian America"]
heroes.push("Hulk")
console.log(heroes)

heroes.pop()
console.log(heroes)

heroes.unshift("Hawkeye")
console.log(heroes)

heroes.shift()
console.log(heroes)

// slice() and splice() method look similar but differ on how they act on array
const orgArray = ["Sam", "Pk", "Raj", "Bruce", "Steve", "Clark"]


const newArray = orgArray.slice(2, 4)
console.log(orgArray)   // No difference in original array
console.log(newArray)   // returns 2,3 index value but not of 4 since that is exclusive


const newArr = orgArray.splice(2, 4)
console.log(newArr)     // returns 2,3,4,5 index value. "2" describe starting point. And "4" describe number of element selected
console.log(orgArray)   // Orginial array is mutated.