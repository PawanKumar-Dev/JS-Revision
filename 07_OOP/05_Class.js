// Classes are introduced in ES6 (ECMAScript 2015). They provide a cleaner syntax for working with objects and prototypes.
// Note: Classes are syntactic sugar over JS's existing prototype-based inheritance.


// Use "class" keyword to define a class.
class Car {

  // "constructor" is special method for creating and initializing objects.
  // Automatically called when you use the "new" keyword.
  constructor(engine, door) {
    this.engine = engine
    this.door = door
  }

  // Function are called method and access variable of class with "this" keyword.
  // Methods are shared across all instances object of the class.
  checkSpeed() {
    let engineInNum = this.engine.replace("hp", "")
    console.log(`Speed is: ${engineInNum * 2}`)
  }

  // Static methods are defined using the "static" keyword.
  // They belong to the class itself, not instances of class.
  static knowYourClass() {
    console.log(`This is Car class`)
  }
}

// Create an instance object of the class
const myCar = new Car("100hp", 4)
console.log(myCar)
myCar.checkSpeed()

// Calling static method need no Object instance.
Car.knowYourClass()
