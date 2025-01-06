// Functions is just a block of code that is useful and repeatable. And most common way to define a function is:
// This function declaration
function myFunc() {
    console.log("Function running")
}

// Function calling
myFunc()

// You can use parameters/arguments inside function and return the result
function mySum(num1, num2) {
    return num1 + num2
}

console.log(mySum(4,5))     //Returns 9

/*
...Rest operator is Opposite to ...spread operator
This allow us to collect values and combine them into an array.
*/
function total(...num) {
    return num
}

console.log(total(100, 200, 300))       //returns [ 100, 200, 300 ]


function newTotal(num1, num2, ...num) {
    return num
}

console.log(newTotal(1, 2, 3, 4, 5))