// Undefined datatype is automatically assigned to any variable declared if we don't assign any value to it.

let x;
console.log(x); // undefined


// null datatype show that we have intentionally assigned (no value/empty value) to a variable.
let emptyData = null
console.log(emptyData)


// Regarding "null" if you check its datatype it show up as an "object". Which is a quirk. Some call it base error of JS also.
console.log(typeof(null))


// Also when you simply compare two they show up as "true"
// When using loose equality operator (==), JS performs type coercion before comparing the values. And acc to the ECMAScript specification, when comparing "undefined" and "null", they are considered equal.
// Why? Becoz after conversion both comes as empty values. 
console.log(undefined == null)

// But on strict comparison it returns false.
// Becoz there is no type coercion.
console.log(undefined === null)
