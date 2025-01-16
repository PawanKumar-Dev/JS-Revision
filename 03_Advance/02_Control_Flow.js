// Control flow means whether our code is excuted is conditional or not. For this we use if. Our code get excuted only "if statement" condition is true.
const userLoggedIn = true

if(userLoggedIn) {
    console.log("Execute")
}

// Conditions are evaluted by comparison operators like: <, >, >=, <=, ==, !=, ===
// Remember single (equalto =) is assignment operator. (==) is comparison operator. (===) is strict comparison operator which also check for data-type, besides the value.
if(2 == "2") {
    console.log("Condition is true")
}

// Shorthand of "if statement"
if(2 != 3) console.log("Condition true")

// You can return multiple statement by using comma only
if(2 <= 3) console.log("Condition true"), console.log("2 is lesser than 3")
