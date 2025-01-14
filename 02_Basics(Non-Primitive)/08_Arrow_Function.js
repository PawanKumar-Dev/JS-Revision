// "this" keyword refers to current object in JS. But its current object/context can vary a lot depending upon where you execute it.
// In below context, "this" refers to our object "user"
const user = {
    username : "Pawan",
    price : 560,
    welcomeMessage : function () {
        console.log(`Hi ${this.username}, welcome to userpanel`)
    }
}

// Returns answer correctly
user.welcomeMessage()

// But when we use "this" keyword in Node JS environment. It refers to {} or an empty object.
console.log(this)

// Same if you excute it in browser "this" refers to "Window" object.