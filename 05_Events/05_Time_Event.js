// "timestamp": is useful property that gives you the exact time (in milliseconds) at which an event was created.
// This is particularly helpful for logging, debugging, and performance monitoring in your applications.
// Remember: time in milliseconds is calculated from (00:00:00 UTC on 1 January 1970).

document.getElementById("timebtn").addEventListener("click", function (e) {
  let localTime = new Date().toLocaleTimeString(e.timeStamp)
  console.log("Button clicked on: " + localTime)
}, false)
