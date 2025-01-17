/*  In JS, some values are treated as truthy(truth) and falsy(false) value, when used in conditionals (if, while, etc.)
    
    Falsy: A value is considered falsy if it translates to false when evaluated in a boolean context. There are 7 falsy values in JS:
        1) false (the boolean value false)
        2) 0 (the number zero)
        3) -0 (negative zero)
        4) 0n (BigInt zero)
        5) "" or '' (an empty string)
        6) null
        7) undefined
        8) NaN (Not a Number)

    Truthy: Any value that is not falsy is considered truthy.
        1) Non-zero numbers (positive or negative)
        2) Non-empty strings ("hello", " " (a string with just a space), etc.)
        3) Objects ({}, [], functions, etc.)
        4) Symbol values
        5) Infinity and -Infinity
        6) Any BigInt value except 0n
*/

// Be cautious when using truthy and falsy values in conditionals. JS type coercion can lead to unexpected results. Always validate to avoid bugs.