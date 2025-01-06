// When you want to merge two array, best method is spread array.
const names = ["Raju", "Pk", "Shayam", "Steve"]
const emails = ["pjk@gmail.com", "klo@hotmail.com", "why@yahoo.in", "gho@aol.com"]


// concat() can merge two array but spread
const newArray = names.concat(emails)
console.log(newArray)


// ...() spread methods is easier. And spread operator is more used than anything else. And it join more than two arrays unlike concat() methods.
const newArray1 = [...names, ...emails]
console.log(newArray1)


// Check if a variable is an Array datatype or not with "Array.isArray()" method
// returns "true"
console.log(Array.isArray(names))


// Similarly you can convert some datatypes into array "Array.from()" method
console.log(Array.from("Pawan"))


// You can combine multiple value into array with "Array.of()" method
const score1= 100
const score2= 200
const score3= 300

console.log(Array.of(score1,score2, score3))