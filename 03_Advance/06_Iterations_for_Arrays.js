// JS use Arrays and Objects very much. Hence there are some loops which make iterating them simple.
const myArray = [1, 2, 3, 4, 5]

// "for of" loop is simpler than "for" loop.
for(const num of myArray) {
    console.log(num)
}

// They can even used on strings also.
const myString = "Hello User"

for(const char of myString) {
    console.log(`Character in ${char}`)
}

/*
    The "Map object" is a data structure that holds key-value pairs where keys can be of any datatype (Just like any object).
    But "map" Maintains insertion order when iterating.
    "key" is always unique in map. Avoid duplication of data unlike objects where things get duplicated.
*/
const myMap = new Map()

myMap.set("name", "Pawan")
myMap.set("job", "WD")
myMap.set("lang", "JS")

console.log(myMap)

// Using "for of" loop in Maps is easier. [key, value] is basically de-structing our array.
for(const [key, value] of myMap) {
    console.log(`${key} :  ${value}`)
}

// "for of" loop doesn't work with objects.
const myObj = {
    game1 : "GTA V",
    game2 : "NFS"
}

for(const [key, value] of myObj) {
    console.log(`${key} : ${value}`)
}