// Here we explain difference between "clientX/Y", "pageX/Y", "screenX/Y" and "offsetX/Y".
// Every coordinate is calculated from top-left corner.


// e.clientX or e.clientY : These properties captures the position of user interactions within the current viewport/browser window. 
// Here scrolled above or down section is not calculated.
document.addEventListener("click", function (e) {
  console.log(`clientX/Y: ${e.clientX}: ${e.clientY}`)
}, false)



// e.pageX or e.pageY: this does same as above. But relative to webpage/HTML document.
// Here our page is considered from very top of body. That is even if we scroll down or above, pageX/Y calculate the scrolled section too.
document.addEventListener("click", function (e) {
  console.log(`pageX/Y: ${e.pageX}: ${e.pageY}`)
}, false)


// So if their is no "scroll-bar" or the page is not-scrollable, then both clientX/Y and pageX/Y behave same.



// e.screenX or e.screenY: Does samething. But relative to your screen-size of device/ computer screen.
document.addEventListener("click", function (e) {
  console.log(`screenX/Y: ${e.screenX}: ${e.screenY}`)
}, false)
