// Rest Operator( ...) :- Used in places where you want to collects multiple arguments into a single array.
// Once array is compiled. We can use various built in methods like map(), forEach() or reduce() to loop over.

// Example where (...)Rest Operator is used are:
// 1. Function Parameters: When defining a function, using ... in the parameters collects all arguments into an array.
function sumOfAllNums(...nums) {
    let total = 0
    nums.forEach((item) => total += item )
    return total
}
console.log(sumOfAllNums(1, 2, 3))


// Destructuring Assignments: When extracting values from an array or object and you want to group the "remaining" elements/properties.
const jobseeker = {
    name: "john",
    resume: "johnResume.pdf",
    age: 22,
    occupation: "Engineer"
}

const {name, resume, ...otherDetails} = jobseeker
console.log(name, resume, otherDetails)

// As we can see we extracted first two values and wrapped the rest in sepreate object using (...)Rest Operator.
// Same things can be done using Array Destructing.

// Note: In an array destructuring pattern, the rest element must come "last" position.
// In object, it can come anywhere after specifying other properties (though conventionally placed at the end for clarity).
