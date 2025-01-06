// When you want to merge two array, best method is spread array.
const names = ["Raju", "Pk", "Shayam", "Steve"]
const emails = ["pjk@gmail.com", "klo@hotmail.com", "why@yahoo.in", "gho@aol.com"]


// concat() can merge two array but spread
const newArray = names.concat(emails)
console.log(newArray)


// ...() spread methods is easier. And spread operator is more used than anything else. And it join more than two arrays unlike concat() methods.
const newArray1 = [...names, ...emails]
console.log(newArray1)