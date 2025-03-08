// (+=) is called Addition Assignment Operator and is a shorthand for performing addition and assignment in one swoop.
// a += b;  is equivalent to: a = a + b;
let x = 5
let y = 6

// Returns 11 in both cases below.
console.log(x += y)
console.log(x)


// But (=+) is not an opertor. Instead JS treats it as "Just Assignment with Unary(+)"

// Returns 6 only in both cases.
console.log(x =+ y)
console.log(x)

// Above operation shows you only assignment operation was successful.
// Becoz "+" was treated as seprate entity.
// Importantly: "+" can trigger "Type Coercion".
// So avoid using "=+"
