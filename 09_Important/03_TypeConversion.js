// Datatype conversion can be minefield, especially when it happens implicitly.
// Since JavaScript is a dynamic type langauge. Type conversion happens automatically. This “magic” can lead to unpredictable behavior. 

// For e.g., Comparing a string and a number might unexpectedly succeed:
console.log("5" == 5); // true because of implicit conversion
console.log("5" === 5); // false – the strict equality operator avoids conversion

// When the conversion happens under the hood, you might lose control over how and when your data is changed.

// Converting datatypes deliberately (using methods like: parseInt, parseFloat etc) makes intent clear and reduces the chance for errors.

// When converting a floating-point number to an integer ,JS discards the decimal part. And this can cause data loss.
// For e.g., converting 3.99 to an integer leaves you with 3, which might not be what you intended.


// Remember: explicit type conversion is crucial, especially in JS(which loves implicit conversion).
// By converting explicitly—using functions like parseInt or parseFloat, we minimizing bugs. And pay attention to writing reliable, maintainable code.
