/*
  Prototype is mechanism of JS.
  This makes JS an OOP langauge. Since objects can inherit properties and methods from other objects.
  This also enables our prototypal inheritance.
*/

/*
  1. Prototype Object: Every object has a hidden [[Prototype]] property (access "__proto__" in most environments or "Object.getPrototypeOf()")
  This property points to another object, called its prototype, from which it inherits properties and methods.

  2. Prototype Chain: When you access property/method on an object, JS first looks for it on object itself. Then, if it doesn't find it, it looks up the prototype chain by checking the object's prototype. Then the prototype's prototype, and so on, until it reaches null.

  3. Constructor Function Prototype: Functions have a prototype property (not to be confused with [[Prototype]] of an instance). When we create an object using a constructor function with the new keyword. Then the object's [[Prototype]] is set to the constructor's prototype property.
*/

function multipleByTwo(num) {
  return num * 2
}
// Works like normal function
console.log(multipleByTwo(5))



// Objects "dot notation" works with function. Becoz everything in JS is treated as an object. Even a function.
// Adding a property 'power' to the function object.
multipleByTwo.power = 2
// Returns "2" as answer. Accessing the property 'power'.
console.log(multipleByTwo.power)



// Our function is treated as object(behind the scene). Hence it has a default "prototype" property.
// And, functions can also serve as constructor functions. Meaning they can add properties and methods to be shared across all instances.
// Since in below example our "multipleByTwo" is contructor function. It has no property and method yet. That is why it returns an empty object {}.
console.log(multipleByTwo.prototype)




const myArray = [1, 2, 3]
const myString = "Pawan"
const myObject = { name: "Raju" }

// We can attach our own method/property to Object via "prototype".
Object.prototype.myMethod = function () {
  console.log("My method is everywhere!")
}

// And that method will be accessible in all different data structure. Since we attached our method to top hierchy element of JS -- "Object".
myArray.myMethod()
myString.myMethod()
myObject.myMethod()

