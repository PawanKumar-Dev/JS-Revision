/*
  When we select multiple elements using "querySelectorAll", we get a "NodeList".
  NodeList in JS is collection of nodes (elements, text nodes, comments, etc.) retrieved from the DOM.
  Similar to array but has its own specific characteristics and behaviors.
*/

const myUlList = document.querySelectorAll("ul li")
console.log(myUlList)

// We get: NodeList(3) [li, li, li]
// You can treat this NodeList as array to change color of first element

myUlList[0].style.color = "green"


// 
