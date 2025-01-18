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


// Beside values, we can also access index and whole array in forEach loop.
myArray.forEach((value, index, fullArray)=>{
    console.log(`Value: ${value}, Index: ${index} and full array: ${fullArray}`)
})

// Most common way to extract data from DB is JS objects array. And forEach loop handle such data best.
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

// In this case "item" refers to our individual object inside the array. Then just dot(.) notation to access inside the object.
arrayOfObjects.forEach((item)=> {
    console.log(item.languageName)
})