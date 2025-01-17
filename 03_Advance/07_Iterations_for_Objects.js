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