// We can shorten Arrow Function further by using () parenthesis and removing "return" keyword

const sum = (num1, num2) => {
    return num1 + num2
}

console.log(sum(4, 5))

// Shorten Form
const sumTwo = (num1, num2) => (num1 + num2)

console.log(sumTwo(8, 2))


// Remember when using {} curly-braces, we must use "return" keyword