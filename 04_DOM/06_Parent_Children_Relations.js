// Parent-Children relations are vital in JS. They allow us to target collection and its children easily.
const parent = document.querySelector(".parent_box")
console.log(parent)


// "children" is property that give us sub nodes/elements of parent node/element.
console.log(parent.children)                        // Returns an HTMLCollection of sub-elements also called children.
console.log(parent.children[0])                     // Returns an specific children of index value 0
console.log(parent.children[0].innerHTML)           // Returns "Monday"


// simple "for" loop will work with our HTMLCollection.
for (let p = 0; p < parent.children.length; p++) {
  console.log(parent.children[p].innerHTML)
}


// Parent element have certain properties that make children element selection easier.
console.log(parent.firstElementChild)               // Returns the first element of parent
console.log(parent.lastElementChild)                // Returns the last element of parent


// When we have access to children and want to know about parent element. We use "parentElement" property.
const firstChild = document.querySelector(".child_box_1")
console.log(firstChild)
console.log(firstChild.parentElement)               // Returns the whole parent element html form


// Similarly we can access next sibiling also.
console.log(firstChild.nextElementSibling)          // Returns the next sibiling element html form "tuesday"
