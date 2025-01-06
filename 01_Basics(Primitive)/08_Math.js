// Math is built-in object of JS. It works excusivily with Numbers. It's not a constructor hence no instance of Math.
// Math provide some basic/essitianl methods for us.

// abs() method always return positive number
console.log(Math.abs(-400))

// round() method return nearest rounded number
console.log(Math.round(500.45806))
console.log(Math.round(500.75806))

// floor() method return nearest "rounded down" number
console.log(Math.floor(500.45806))
console.log(Math.floor(500.75806))

// ceil() method return nearest "rounded up" number
console.log(Math.ceil(500.45806))
console.log(Math.ceil(500.75806))


// Most famous method of Math.random() return random number from 0 (inclusive) and 1 (exclusive).
console.log(Math.random())
console.log((Math.random() * 10) + 1)  // Return no. b/w 0 and 10 now