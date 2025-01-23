// The "keyCode" property is used to identify which key was pressed on the keyboard during events like keydown, keyup, and keypress.
// "keyCode" returns a number representing a key.
// Do note "keyCode" is deprecated.
document.addEventListener("keydown", function (e) {
  console.log(e.keyCode)
})


// Modern JS, we can use "e.key" or "e.code"
// Both returns the keyboard key name in string.
document.addEventListener("keydown", function (e) {
  console.log(e.key)
})

document.addEventListener("keydown", function (e) {
  console.log(e.code)
})
