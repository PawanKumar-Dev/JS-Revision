/*
  When we use getElementsByClassname as selector to fetch items. We get return as HTMLCollection.
  HTMLCollection does not support any loop method as: forEach, map or filter.
  We must convert HTMLCollection to array using: Array.from() method
*/

const fruits = document.getElementsByClassName("fruits")
console.log(fruits)


// HTMLCollection to Array Conversion
const fruitsConvertedArray = Array.from(fruits)


fruitsConvertedArray.map((item) => {
  item.style.color = "blue"
})
