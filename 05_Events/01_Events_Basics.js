// Events are actions or occurrences that happen in the browser and are used to handle interactions from the user.

// <button id="btn" onclick="alert('btn clicked')">Click Button</button>

// This way hardcode our event and in future scaling of web app is difficult.
// Note: When we do the same in React.js, its diffrent since react.js process our code differently as its a library.

// This way works. But again still it offers less features.
document.getElementById("btn").onclick = function () {
  console.log("btn clicked")
}


/* Best and modern way is to use "addEventListener". They are powerful and support event propagation. "addEventListener" takes 3 parameters:
 1) "event name".
 2) "callback function".
 3) "false" which by default false. Hence most time ignored. But this controls "Event Propagation".
*/
document.getElementById("menu").addEventListener("click", function () {
  console.log("menu btn clicked")
}, false)



// Another method to work with event use method: attachEvent()
// Works in older Internet Explorer(before IE9) only. Other browsers will not support it.
// Depraceted now.
document.getElementById("close").attachEvent("click", function () {
  console.log("close btn clicked")
})
