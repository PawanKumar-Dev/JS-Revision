// Both aysnc-await and then-catch blocks handle promises well but in some use case "then-catch code block" is simpler and less confusing.

// Using fetch() with async await to get data of api: https://jsonplaceholder.typicode.com/users

// Below example show us that beside fetch() which respond with promise. Which we did "await".
// We need to "await" json() method as well. Since conversion of our data to json also takes sometime.
async function getUsers() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    console.log(data)
  } catch (error) {
    console.log(error)
  }
}

getUsers()


// This exampled showed why async-await can be little problematic when handling responses. But "then-catch code block" less confusing.

// Using fetch() we got the promise.
// Next we used "then()" to return data in JSON to next "then() code block".
// And lastly handled the error.
fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => {
    return response.json()
  })
  .then((jsonData) => {
    console.log(jsonData)
  })
  .catch((error) => console.log(error))
