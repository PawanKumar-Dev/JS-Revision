// When we excute our handleClick function "this.msg" we get undefined.
// Becoz our "this" keyword refers to its own context(which is handleClick function scope itself)
// msg variable it outside of handleClick function "this". To fix this we use "bind()" method.

document.querySelector("button").addEventListener("click", function () {
  const msg = "Button Clicked"

  handleClick = function () {
    console.log("handle Click executed")
    console.log(this.msg)
  }
  handleClick()
})



// Now with bind() method we made sure that our handleClick() is able to access this.msg of above context.
document.querySelector("button").addEventListener("click", function () {
  const msg = "Button Clicked"
  const link = "google.com"

  handleClick = function () {
    console.log("handle Click executed")
    console.log(link)
  }.bind()

  handleClick()
})
