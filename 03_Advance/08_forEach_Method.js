/*  forEach() method is probably the most used and famous built-in method in JS.
    Inbuilt in any JS array prototype. Hence also called High Order Method.
    map() method is similar in nature.
    But forEach() method never returns only "undefined".
*/
const myArray = ["html", "css", "js", "nodejs", "php", "mysql"]


/*  Since every array provide forEach() method we can apply like below.
    But our forEach() takes a callback function where we determine what to do.
    Callback function automatically take values from array.
*/
myArray.forEach(function (item) {
    console.log(item)
})


// Similarly we can shorten our code with Arrow function as callback function
myArray.forEach((item)=> {
    console.log(`Doing with Arrow function: ${item}`)
})


// Beside values, we can also access index and whole array in forEach() method.
myArray.forEach((value, index, fullArray)=>{
    console.log(`Value: ${value}, Index: ${index} and full array: ${fullArray}`)
})

// Most common way to extract data from DB is "arrya of JS objects".
// And forEach() method handle such data best.
const arrayOfObjects = [
    {
        languageName : "JavaScript",
        shortHand : "JS"
    },
    {
        languageName : "Hypertext Preprocessor",
        shortHand : "PHP"
    },
    {
        languageName : "Hyper Text Markup Language",
        shortHand : "HTML"
    },
]

// In this example "item" refers to our individual object inside the array.
// Then we use dot(.) notation to access element inside the object.
arrayOfObjects.forEach((item)=> {
    console.log(item.languageName)
})


// returns "undefined". So only use forEach when printing data or excuting something. it doesn't return anything.
const values = myArray.forEach(function (item) {
    return item
})
console.log(values)
