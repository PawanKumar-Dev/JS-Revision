// Comparison Operatorsc( >=, <=, <, > ) behave normally in JS when doing numerical operations.
console.log(2>1)
console.log(1<2)
console.log(1<=2)
console.log(2>=1)

// But when non-numeric data types come into play. Things get quirky. And Type Coercion occurs.
console.log("2">1)      //"2" get converted to number 2. Hence we get result true

console.log(null > 0)     //null get converted to 0. Hence answer false
console.log(null < 0)     //null get converted to 0. Hence answer false
console.log(null >= 0)    //null get converted to 0. And 0 >= 0 evaluates to true because 0 is equal to 0.
console.log(null <= 0)    //null get converted to 0. And 0 <= 0 evaluates to true because 0 is equal to 0.

console.log(null == 0)    //null does not get converted to 0. Hence answer false
console.log(null === 0)    //null get converted to 0. But diffrent datatypes. Hence answer false



// Same behavior occurs with "undefined".
// undefined is coerced/converted into "NaN". And NaN is not equal to anything, not even itself.
console.log(undefined > 0)      // false
console.log(undefined < 0)      // false
console.log(undefined >= 0)     // false
console.log(undefined <= 0)     // false
console.log(undefined == 0)     // false
console.log(undefined === 0)     // false
console.log(undefined == NaN)     // false