// map() method also takes a callback function, similar to filter(), forEach() method.
// And this callback function performs our action and returns data back.
// Like filter(), map() also returns value.

const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Shortform works because we haven't opened any scope{}. Also known as "implicit return".
const newArray1 = myArray.map( (item)=> item + 10 )

// When we use {} scope then we must use "return" keyword. Also known as "explicit return".
const newArray2 = myArray.map( (item)=> {return item + 10} )

console.log(newArray1)
console.log(newArray2)
