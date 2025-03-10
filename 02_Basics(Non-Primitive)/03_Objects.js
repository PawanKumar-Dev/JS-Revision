/* Object can be created via two methods:
    1.object constructor/ new keyword (which have singleton)
    2.object literals (which is normal declartion method we will use)
*/

// Object literals are preferred in Js for easy-to-read and use format.
const user = {
    username : "Pawan",
    email: "pawan@gmail.com",
    phone: 894652,
    "full name": "Pawan K"
}

// Accessing objects have two methods.
// First and most used method: (.)dot notation
console.log(user.username)

// But this method has some limitation such as "full name" will never be accessed via dot notation
// Now we use Second method [] bracket notation
console.log(user['username'])
console.log(user["full name"])      // This works only with [] notation


// Symbols are unique that they can only be accessed via [] notation properly.
const id = Symbol('id')

const newUser = {
    name: "Raju",
    [id]: 59471
}

console.log(newUser[id])    //Proper access of Symbol


// You can access all 'keys' and 'values' in Object using these methods
console.log(Object.keys(user))
console.log(Object.values(user))
