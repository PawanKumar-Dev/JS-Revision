// Object Destructuring is simple thing where we simplify reading properties and functions inside of object.

const user = {
    id: 4580,
    name: "Pawan",
    email: "pk@gmail.com",
    jobWorking: "Web" 
}

// Normally you will access like this:
console.log(user.jobWorking)

// But with destructuring we can simplify it further
const { jobWorking } = user
const { jobWorking:job } = user

// Shorter version now
console.log(jobWorking)
console.log(job)