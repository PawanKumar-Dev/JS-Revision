// Comparison Operatorsc( >=, <=, <, > ) behave normally in JS when doing numerical operations.
console.log(2>1)
console.log(1<2)
console.log(1<=2)
console.log(2>=1)

// But when non-numeric data types come into play. Things get quirky. And Type Coercion occurs.
console.log("2">1)      //"2" get converted to number 2. Hence we get result true

console.log(null>0)     //null get converted to 0. Hence answer false

