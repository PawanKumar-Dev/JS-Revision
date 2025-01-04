// Strings can be wrapped inside ""(double) or ''(single) quotes. Just keep consistency.
// Concacting(joining) strings together. And strings with other datatypes is simple.
let userName = "Pawan"
let repo = 50
console.log(userName + repo)
console.log("My username: "+ userName+ " and my repo count is: " + repo)


// Above concating using "+" was old method in JS. In modern JS, we use "Template Literals" methods.
stringTxt = `My username is ${userName} and my repo count is : ${repo}.`
console.log(stringTxt)


// Using new String(), the String constructor is used to create a String object, not a primitive string.
// This gives us additional properties and methods.
let user = new String("Hello")
console.log(typeof(user))

console.log(user.length)    // returns length of user string.


// Even this returns length of "userName". Why? Because of typecoercion/autoboxing where our primitive string get temprorily converted to object String.
// And after usage of String object is finished. Our string revert back to primitive string.
console.log(userName.length)


// Since string can behave as object. We can use key:value concept to access string characters.
console.log(user[0])