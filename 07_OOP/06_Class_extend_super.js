// "extends" keyword to create a subclass(child class) that inherits from a parent class.
class Car {
  constructor(engine, doors) {
    this.engine = engine
    this.doors = doors
  }

  speedCheck() {
    console.log(`${this.engine * 2}`)
  }
}

const myCar = new Car(100, 4)
console.log(myCar)


// super() to call the parent class's constructor and methods.
class Hyundai extends Car {
  constructor(engine, doors, hyundaiModel) {
    super(engine, doors)
    this.hyundaiModel = hyundaiModel
  }
}

const myNewCar = new Hyundai(100, 4, "S1")
console.log(myNewCar)


// Similarly static and other methods are also inherited.
