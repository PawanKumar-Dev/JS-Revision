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

// ...Rest operator is pretty similar to ...spread operator
// This allow us to pass any numbers of parameter without any fixed number of argument in function declaration step
function total(...num) {
    return num
}

console.log(total(100, 200, 300))       //returns [ 100, 200, 300 ]