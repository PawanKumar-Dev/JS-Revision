// The Document Object Model (DOM) is a programming interface that represents the structure of a webpage as a tree of objects.
// This allows JS to interact and manipulate the content, structure, and styles of a webpage dynamically.

// DOM (Document Object Model) is like a bridge between your web page and JavaScript.
// It turns your HTML into an object that JavaScript can work with.


//  "document" is part of "window" object in browser. But you can directly access it also with :cosole.dir(document)
console.log(window)
console.dir(document)


// "getElementById" method in JS can select and manipulate a specific DOM element by its unique id attribute. Then we can manipulate it.

const titleData = document.getElementById("title")                      // Returns the h1 element: '<h1 id="title">this data can be changed by id</h1>'.
const titleDataId = document.getElementById("title").id                 // Returns the id of element selected: 'title'
const titleDataClass = document.getElementById("title").className       // Returns classname: 'h1'

console.log(titleData)
console.log(titleDataId)
console.log(titleDataClass)


// Similar to this we can get data by using "getAttribute()" methods and set new data in HTML with "setAttribute() methods"
const headingData = document.getElementById("title").getAttribute("class")
const headingDataId = document.getElementById("title").getAttribute("id")

console.log(headingData)
console.log(headingDataId)


// This replaces the existing class 'h1' with 'myNewClass'
document.getElementById("title").setAttribute("class", "myNewClass")

console.log(titleData)


// We can change styling of element with "style" method. You would see that h1 element is now blue in color.
// Both are same
titleData.style.color = "blue"
document.getElementById("title").style.color = "red"