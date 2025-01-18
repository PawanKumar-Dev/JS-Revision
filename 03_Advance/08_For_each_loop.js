/*  forEach loop is probably the most used and famous loop in JS.
    Inbuilt in any JS array prototype. Hence also called High Order loop.
    map loop is similar in nature.
*/
const myArray = ["html", "css", "js", "nodejs", "php", "mysql"]


/*  Since every array provide forEach() we can apply like below.
    But our foreach take a callback function where we determine what to do.
    Callback function automatically take values from array.
*/
myArray.forEach(function (item) {
    console.log(item)
})

// Similarly we can shorten our code with Arrow function as callback function
myArray.forEach((item)=> {
    console.log(`Doing with Arrow function: ${item}`)
})