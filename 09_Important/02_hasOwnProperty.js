// hasOwnProperty() method allow you check whether an object have that particular property or not.
// Allow us to diffrentiate b/w inherited prototype properties and object's own properties.

// Question: When asked to loop through an array and display only its original properties
// Answer: Understand that additional properties injected through prototypes should be ignored. This requires a solid grasp of JS's prototype chain and property enumeration.
let myArray = [1, 2, 3]


// We can do this becoz array is an object in JS engine.
Array.prototype.hiddenProperty = "hi"


// So now when we use for-in loop we also access hidden prorpty. Which is not part of original array.
// for (let item in myArray) {
//   console.log(item)
// }

// To avoid prototype inherited properties, we use hasOwnProperty()
for (let item in myArray) {
  if (myArray.hasOwnProperty(item)) {
    console.log(item)
  }
}
