// Axios is a 3rd party library (installed via npm or yarn).
// Give us simple interface to perform HTTP requests: GET, POST, PUT, DELETE, etc.
// Similar to fetch() method. But reduced boilerplate code.

// But Axios handle "json conversion" on its own.
// Handle erros on its own.
// Provide us request and response interceptors


const axios = require('axios')

const apiData = axios.get("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => {
        return response.data
    })
    .catch((error) => {
        return error
    })
    .then((finalData) => {
        console.log(finalData)
    })

// Axios also use the Promise based approach behind the scene.
