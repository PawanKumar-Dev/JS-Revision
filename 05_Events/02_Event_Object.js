// When working with "addEventListener", our callback function get an event object "e".
document.getElementById("menu").addEventListener("click", function (e) {
  console.log(e)
}, false)


// Event "e" provide us with some properties that are important:
// "e.type" : identify what action triggered the event handler, such as a click, a keypress, or a form submission.
document.getElementById("menu").addEventListener("click", function (e) {
  console.log(e.type)             //Returns : "click"
}, false)


// "e.target": using this property, we discern which specific element initiated an event, allowing your JS code to respond more precisely.
// Below example show us how we can identify when our selected element is clicked in the page.
document.addEventListener("click", function (e) {
  if (e.target.className === "first") {
    console.log("first btn clicked")
  }
}, false)


// "e.currentTarget": this tell us which element the eventlistener is attached to, regardless of which nested element triggered the event.
// We can see despite any "li" element clicked, we always get "currentTarget" as mylist ul element.
document.querySelector(".myList").addEventListener("click", function (e) {
  console.log(e.currentTarget)
  console.log(e.target)
}, false)


// e.preventDefault(): this method to prevent the default action of an event. E.g., stopping a form from submitting, preventing a link from following its URL etc.
document.getElementById("link").addEventListener("click", function (e) {
  e.preventDefault()
  console.log("Link clicked but action prevented")
}, false)
