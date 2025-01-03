// Since EcmaScript update there has been some new updates in JS like arrow function, let and const use etc...

/*
Acc. to offical documentation all datatypes in JS can divided into 2 types based on how data is stored and retrived from computer memory:
    1. Primitive (String, Number, Boolean, null, undefined, Symbol, BigInt)
    2. Non-Primitive (Array, Object, Function)
*/

// Primitive datatypes are stored and retrived from "Stack" memory. Hence refered as "call by value" datatypes. Becoz when we retrive them, we get copy of original value.

let userName = "Pawan"
console.log(userName)

let modifyUserName = userName    // Here we assigned "userName" value to "modifyUsername"
console.log(modifyUserName)

modifyUserName = "Pawan Kumar"
console.log(userName)
console.log(modifyUserName)

// Here we can see despite assigning "modifyUsername" new value our original string in "userName" is unchanged.



// Non-Primitive datatypes are stored and retrived from "Heap" memory.
// Also known as "call by refrence"/ reference datatypes. Becoz when we retireve them, we get refrence of original value. Meaning any changes done will change the original value too.
let user = {
    name: "Pawan",
    workHours: 8
}

console.log(user)

let userOne = user
let userTwo = user
console.log(userOne)
console.log(userTwo)

// See what happens when we change values in only "userTwo" variable
userTwo.workHours = 15

// All three variables show the changes. Why? Becoz they refernce the original value. And when made changes to "userTwo" it changed the original value.
console.log(user)
console.log(userOne)
console.log(userTwo)