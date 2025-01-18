// map() loop also takes a callback function, similar to filter(), forEach() loop.
// Like filter(), map() loop returns value and we can do something inside it just like forEach().

const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newArray1 = myArray.map( (item)=> item + 10 )
const newArray2 = myArray.map( (item)=> {return item + 10} )

console.log(newArray1)
console.log(newArray2)