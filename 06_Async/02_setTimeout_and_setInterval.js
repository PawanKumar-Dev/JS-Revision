// setTimeout() is an async function which execute any code after a set time. Time calculated in milliseconds.
const logData = setTimeout(function () {
  console.log("Data logged")
}, 2000)

// "clearTimeout()" method reset our setTimeout().
clearTimeout(logData)



// setInterval() is similar to setTimeout() function. But setInterval execute our code continuesouly with some interval of time.
// Best used for repeating tasks after a set of time.
const logDataRepeatedly = setInterval(function () {
  console.log("Logging data ...")
}, 1000)

// "clearInterval()" stop/reset our method.
clearInterval(logDataRepeatedly)
