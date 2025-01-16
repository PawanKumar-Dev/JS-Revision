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


// We can check multiple condition by using &&(And Operator) and ||(Or Operator)
conditionOne = true
conditionTwo = true
conditionThree = false

// && works if all conditions are true
if(conditionOne && conditionTwo) {
    console.log("Both Condition True")
} else if (conditionOne && conditionThree) {
    console.log("At least one condition is false")
}

// || works if any condition is true
if (conditionOne || conditionThree) {
    console.log("At least one condition is true")
}