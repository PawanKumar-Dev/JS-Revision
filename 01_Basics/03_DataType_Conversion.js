// You can check datatypes of varibles using "typeof" function.
// DataType Conversion in JS can be complicated if not verified

let phoneNumber = "58056"
console.log(typeof(phoneNumber))

let phNumber = Number(phoneNumber)

console.log(typeof(phoneNumber))
console.log(typeof(phNumber))

// Above conversion works normally but what if data is little diffrent
let mobileNumber = "56080abc"
console.log(typeof(mobileNumber))

let mobNumber = Number(mobileNumber)
console.log(typeof(mobNumber))

// you can see that our "mobNumber" is showing type of as "Number" but it is not. Why? let's check.
console.log(mobNumber)

// We get "NaN" whose full form is "Not a number". It is a special datatype which show up as Number even though it is not.


// When converting Boolean value "True" return "1" if false then "0"
let isBoolean = true

let isNumber = Number(isBoolean)
console.log(isNumber)


// When using " "(empty string) and "fwefwe"(filled string) to Number datatype
let emptyString = ""
let filledString = "dvced"

let convertNumber = Number(emptyString)
let convertNumberTwo = Number(filledString)
console.log(convertNumber)      // Returns 0
console.log(convertNumberTwo)      // Returns NaN