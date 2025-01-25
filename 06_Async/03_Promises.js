// A promise in JS is an object representing the eventual completion or failure of an async operation.
// Aysnc tasks are best used in promises e.g., Database Calls, Network Requests or Crytography etc.

/* Promises can be in one of 3 states:
  1. Pending: Initial state. It means the operation is still underway and neither resolved nor rejected.
  2. Fulfilled (Resolved): Indicates async task was successful. Promise transitions from pending to fulfilled. And calls the resolve function.
  3. Rejected: Means promise has failed. Reject function is called, and transitioned from pending to rejected.
*/

// We create instance of promise with its object "Promise". It takes a callback function. "resolve" and "reject" are argument of this callback.
// For example: we do simple async function setTimeout().
const promiseOne = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Doing an Async task")
    resolve()                                     // Always call resolve after the async task is done OR promise never know when it's fullfilled.
  }, 1000)
})


// But after creating an Promise, we must consume/use it using ".then()" method. Which is link directly to "resolve" of promise.
// then() method also takes a callback function.
promiseOne.then(function () {
  console.log("Promise resolved!")
})

// If we did only above things, we never worked properly with Promises. Becoz our .then() method never executes unless "resolve" is called inside the Async task.
// Note: "Promise fullfilled" always excute after our async task.




// We can define new "Promise" simply, without any variable holding and then we chain "then()" method directly to it.
new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Doing an Async task 2")
    resolve()
  }, 2000)
}).then(function () {
  console.log("Promise 2 resolved!")
})



// We can take data into "promise". Then pass this data to "resolve()" method. Since resolve() is linked with then() method, we recieve it easily.
// When reciveing data we can use any name to retreive this data.
const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "pawan", day: "Saturday" })
  }, 3000)
})

promiseThree.then(function (userData) {
  console.log(userData)
  console.log("Data Successful recived. Promise resolved")
})



// "reject()" method is used when we need to check whether we are recieving errors. And implement "catch()" block of promise.
// catch() method also takes a callback function.
const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false
    if (!error) {
      resolve({ id: 56480, email: "pk@gmail.com" })
    } else {
      reject("Error Occurred! Promise 3 failed.")
    }
  }, 4000)
})

promiseFour.then((userData) => {
  console.log(userData)
}).catch((error) => {
  console.log(error)
})


// When we want to return data from promise.then() method. We simply can't hold that returned data in another variable.
const returnedData = promiseFour.then((userData) => {
  console.log("data is returned")
  return userData.email
}).catch((error) => {
  console.log(error)
})

console.log(returnedData)         // This shows Promise<pending>


// To get return data, we must use ".then()" method. And in next "then()" method, we can use a diffrent name variable to access this chained data.
// This is happening becoz ".then()" method always return a promise itself. No "individal value" is returned, only another promise.
promiseFour.then((userData) => {
  console.log("data is returned second time")
  return userData.email
}).then((userEmail) => {
  console.log(userEmail)      // Here we process the return data. In here we must excute/use this returned data. Or we can pass it to another ".then()" method.
}).catch((error) => {
  console.log(error)
})



// Besides "then()", "catch()" we have "finally()" method that always run, despite resolve or reject.
const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false
    if (!error) {
      resolve({ randomData: "Just dummy object" })
    } else {
      reject("Error in randomData")
    }
  }, 5000)
})

promiseFive
  .then((recievedData) => console.log(recievedData))
  .catch((error) => console.log(error))
  .finally(() => console.log("Finally is running, always!!!"))
