// For simpler iteration through Objects, we use "for in" loop
const myObj = {
    game1 : "GTA",
    game2 : "NFS",
    game3 : "Civilization 5"
}

/*
    Why Bracket Notation Works
    Dot notation (myObj.key): JavaScript treats key as a literal string, not as a variable.
    Equivalent to myObj["key"], which doesn't exist in your object.
    Bracket notation (myObj[key]): JavaScript evaluates key to its current value (e.g., "game1", "game2", etc.), then looks up the corresponding property in the object.
*/

for(const key in myObj) {
    // console.log(key)             // Gives us only the keys of object
    // console.log(myObj.key)       // Doesn't work
    // console.log(myObj[key])      // We extract values of object using keys
    console.log(`${key} : ${myObj[key]}`)
}

// "for in" loop can work with array as well
const myArray = ["C++", "JavaScript", "PHP", "Python", "HTML"]

for(const element in myArray) {
    console.log(myArray[element])
}


// Though "for in" loop will not work in Map data structure
const myMap = new Map()

myMap.set("HTML", "Hyper Text Markup Langauge")
myMap.set("CSS", "Cascading Style Sheet")
myMap.set("JS", "JavaScript")

for(const key in myMap) {
    console.log(key)
}