// Promises can be consumed using "Async" and "Await" method.
const promiseOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false
    if (!error) {
      resolve({ lang: "Javascript", year: 2025 })
    } else {
      reject("Error in data!")
    }
  }, 1000)
})


// When we execute below code, when their is no error. Code works!
// But when we get error in response, then our async code give error of "UnhandledPromiseRejection".
// Becoz we haven't handled our errors gracefully.
async function consumePromiseOne() {
  const response = await promiseOne
  console.log(response)
}

consumePromiseOne()


// To handle our error gracefully we must wrap our code in try-catch block. Now when error its handled.
async function consumePromiseTwo() {
  try {
    const response = await promiseOne
    console.log(response)
  } catch (error) {
    console.log(error)
  }
}

consumePromiseTwo()
