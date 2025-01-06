// Undefined datatype is automatically assigned to any variable declared if we don't assign any value to it.

let x;
console.log(x); // undefined


// null datatype show that we have intentionally assigned (no value/empty value) to a variable.
let emptyData = null
console.log(emptyData)


// Regarding "null" if you check its datatype it show up as an "object". Which is a quirk. Some call it base error of JS also.
console.log(typeof(null))


// Also when you simply compare two they show up as "true"
console.log(undefined == null)

// But on strict comparison it returns false.
console.log(undefined === null)