// Like "getElementById" or "getElementByClassname", we other impt selectors as well.
// "querySelector" widely used selector. But it selects the first element it encounters.
// All css selectors are supported in querySelector.

const getHeading = document.querySelector("h1")                       // Target h1 element directly
const getHeadingId = document.querySelector("#titleFour")             // Target element having "id" 
const getHeadingClass = document.querySelector(".yellow")             // Target element having "class"
const getInputAttr = document.querySelector('input[type="text"]')     // Target element based on attribute


console.log(getHeading)
console.log(getHeadingId)
console.log(getHeadingClass)
console.log(getInputAttr)
