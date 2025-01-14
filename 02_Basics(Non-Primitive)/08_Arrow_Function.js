// "this" keyword refers to current object in JS. But its current object/context can vary a lot depending upon where you execute it.
// In below context, "this" refers to our object "user"
const user = {
    username : "Pawan",
    price : 560,
    welcomeMessage : function () {
        console.log(`Hi ${this.username}, welcome to userpanel`)
    }
}

// Returns answer correctly.
user.welcomeMessage()
user.username = "Shayam"
user.welcomeMessage()

// But when we use "this" keyword in Node JS environment. It refers to {} or an empty object.
console.log(this)

// Same if you excute it in Browser environment "this" refers to "Window" object.
// Now Arrow function are a bit shorter form to Function Expression
const sum = (num1, num2) => {
    return num1 + num2
}

console.log(sum(4, 5))


// Arrow functions don't have their "this" but they inherit it. In this case it inherit global "this" keyword context of Node JS.
const myFunc = () => {
    console.log(this)
}

myFunc()

// But what if arrow function defined inside an object
const person = {
    name : "Pawan",
    country: "India",
    greet : function() {
        console.log(`Welcome ${this.name}`)
    },
    greetTwo : () => {
        console.log(`Welcome Again ${this.name}`)
    }
}

// This works properly since this function declaration
person.greet()

// But arrow function returns "undefined" when used for "this" keyword
person.greetTwo()