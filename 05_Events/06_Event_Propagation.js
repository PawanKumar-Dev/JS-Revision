// Event Propagation has two main modes: addEventListener(event, function, false). "true" is for capturing, "false" is for bubbling. By default "false" is selected.

// 1. Event Bubbling: This means the event starts from the target element and bubbles up to the root/parent element in the DOM.
// For example: when we click "innerbox" we get first innerbox console msg. Then "outerbox" event msg too. This is called event bubbling.

// 2. Event Capturing(Trickle Down): In this case event starts from the root/parent element and trickles down to the target element. Opposite of bubbling.



// When we click in outerbox we get outerbox event triggered. Normal behaviour since no other event is bind to outerbox.
// When click in innerbox. First innerbox event triggered. Then outerbox event is triggered. Example of Event Bubbling.
document.getElementById("outerbox").addEventListener("click", function () {
  console.log("clicked inside outerbox")
}, false)

document.getElementById("innerbox").addEventListener("click", function () {
  console.log("clicked inside innerbox")
}, false)



// Now that we turned 3rd parameter to true. When click in innerbox, first outerbox event triggered, then innerbox event is triggered. Called Event Capturing.
document.getElementById("outerbox").addEventListener("click", function () {
  console.log("clicked inside outerbox")
}, true)

document.getElementById("innerbox").addEventListener("click", function () {
  console.log("clicked inside innerbox")
}, true)



// Lastly, if we want to stop this trickle up/down propagation. We can do so with e.stopPropagation() method.
document.getElementById("innerbox").addEventListener("click", function (e) {
  console.log("clicked inside innerbox")
  e.stopPropagation()
}, false)
