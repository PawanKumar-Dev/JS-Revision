// "let" and "const" always define local scope. But "var" is global scope.
// This is why "var" is avoided in modern JS since this can cause override.
let a = 5
const b = 7
var c = 9


// Here we see no difference in execution
console.log(a)
console.log(b)
console.log(c)


// But when we go in {} scopes of diffrent elemets such as if-else, functions etc. Things change.
if(a == 5) {
    let d = 10
    const e = 45
    var f = 15

    console.log(a)
    console.log(b)
    console.log(c)
}

// console.log(d)       //Gives ReferenceError. This is becoz "d" is variable with only local scope
// console.log(e)       //Gives ReferenceError. This is becoz "e" is also variable with only local scope
console.log(f)          // This works becoz 'var' create global variables.