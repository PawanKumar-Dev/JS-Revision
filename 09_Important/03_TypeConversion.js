// Datatype conversion can be minefield, especially when it happens implicitly.
// Since JavaScript is a dynamic type langauge. Type conversion happens automatically. This “magic” can lead to unpredictable behavior. 

// For e.g., Comparing a string and a number might unexpectedly succeed:
console.log("5" == 5); // true because of implicit conversion
console.log("5" === 5); // false – the strict equality operator avoids conversion

// When the conversion happens under the hood, you might lose control over how and when your data is changed.

// Converting datatypes deliberately (using methods like: parseInt, parseFloat etc) makes intent clear and reduces the chance for errors.
