// Date is another buit-in object of JS. And count time and date from 01 January 1970 UTC. All time is calculated in milliseconds.
let now = new Date()
console.log(now)

// return "object"
console.log(typeof(now))

// Return the date only
console.log(now.getDate())

// Return the day only but in number like 6(Saturday)
console.log(now.getDay())

// Return the year of date
console.log(now.getFullYear())

// Return the current time but in milliseconds in timestamp format
console.log(now.getTime())

// Convert date into human-readable date format
console.log(now.toString())
console.log(now.toLocaleDateString())
console.log(now.toLocaleString())
console.log(now.toISOString())