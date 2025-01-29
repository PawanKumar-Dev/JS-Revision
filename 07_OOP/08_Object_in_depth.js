// Object.getOwnPropertyDescriptor() is a method that tell us about in-built properties of an object. Not inherited properties from prototype chains.
// Metadata tell us "value", "configurability", "writability", and "enumerability".
console.log(Object.getOwnPropertyDescriptor(Math, 'PI'))


// With Object.defineProperty() method we can define or change an property attributes (like writable, enumerable, configurable, and get/set).
Object.defineProperty(Math, 'PI', {
  value: 5,
  writable: true,
  enumerable: true,
  configurable: true
})

console.log(Math.PI)
// Built-in properties like Math.PI, undefined, NaN, or Object.prototype are locked down by the JS engine. And any attempt to modify its descriptor attributes will fail.



// So using Object.defineProperty() works for only for custom properties or objects you control.
const myObj = { PI: 5 }
Object.defineProperty(myObj, "PI", {
  writable: false,
  enumerable: false,
  configurable: false
})

//returns 5
console.log(myObj.PI)
myObj.PI = 6
// Still returns 5 becoz we have made our Object properties non-writable
console.log(myObj.PI)
