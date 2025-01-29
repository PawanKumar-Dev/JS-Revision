// getters and setters are special methods that allow you to control access to an object's properties.
// We can define custom logic for reading (get) or writing (set) values. They enable encapsulation.

// "getters" and "setters" are in pair. We cannot use one without the other.
// _variable name are private variables.

class Car {
  constructor(carname) {
    this._carname = carname
  }

  // We use set() method to set new name.
  set name(newName) {
    return this._carname = newName
  }

  // We use get() method to get the existing name
  get name() {
    return this._carname
  }
}


const myCar = new Car("Hyundai")
console.log(myCar)


myCar.name = "Honda"
console.log(myCar)
