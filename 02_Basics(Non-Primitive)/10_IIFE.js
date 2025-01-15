// IIFE(Immediate Invoked Function Expression) are functions that get executed as soon as it was declared. They are called IIFE and best used when you fear Global scope pollution.
// It allows you to create a self-contained scope, avoiding variable pollution in the global scope.

// These are called "Named IIFE" since it has a name
(function myFunc() {
    console.log("DB Connected")
})();


// Below will give you error if you previous IIFE is not ended with semicolon(;)
(() => {
    console.log("DB Connected Two")
})();

// You can also pass argument/parameters into IIFE
((user) => {
    console.log(`Welcome ${user}`)
})("Pawan")