/* In JS, "childNodes" property is used to get a NodeList containing all the child nodes of a specified DOM element.
  1: Element nodes(e.g., <div>, <p>, etc.)
  2: Text nodes (e.g., spaces, newlines, and text content)
  3: Comment nodes (e.g., <!-- comment -->)
*/
const parent = document.querySelector(".parent_box")
console.log(parent.childNodes)


// "childNodes" are diffrent than "children" of parentElement.
// childNodes: Includes all child nodes (elements, text, comments).
// children: Includes only child elements(ignores text and comments).



// childNodes are important in lib. like React Js
