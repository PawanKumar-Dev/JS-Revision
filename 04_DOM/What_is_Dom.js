// The Document Object Model (DOM) is a programming interface that represents the structure of a webpage as a tree of objects.
// This allows JS to interact and manipulate the content, structure, and styles of a webpage dynamically.

// DOM (Document Object Model) is like a bridge between your web page and JavaScript.
// It turns your HTML into an object that JavaScript can work with.


//  "document" is part of "window" object in browser. But you can directly access it also with :cosole.dir(document)
console.log(window)
console.dir(document)


// "getElementById" method in JS can select and manipulate a specific DOM (Document Object Model) element by its unique id attribute.
const titleData = document.getElementById(title)
console.log(titleData)