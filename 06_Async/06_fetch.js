// The fetch() method is modern, built-in way to make HTTP requests and retrieve data from a server such as APIs.
// It's part of the "Fetch API", which is more powerful than older "XMLHttpRequest".
// Read More here: https://developer.mozilla.org/en-US/docs/Web/API/Window/fetch


// fetch() method returns a promise which can be handled by "then-catch-code-block".
// Note: if our server respond with 404 or 403 like error. Our fetch() will treat these errors as "resolve" queries since we did connect to api-server.
fetch("https://fakestoreapi.com/users")
  .then((response) => {
    return response.json()
  })
  .then((jsonData) => {
    console.log(jsonData)
  })
  .catch((error) => {
    console.log(error)
  })


// When you other aysnc functions and fetch(), our fetch() respond faster because it's in a higher-priority queue in "Task Queue".
