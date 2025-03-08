// In a browser (or even Node.js) environment, JS isn’t the only player. The host environment provides various APIs that run outside the JS engine. These are called "External APIs" or "Web APIs".

// For Example:
// Web APIs in browsers: Functions like setTimeout, setInterval, fetch for network requests, and DOM event listeners.
// Node.js APIs: Modules for file system operations, networking, timers, etc.

// How They Work:
// When we call something like setTimeout(callback, delay), JavaScript hands off the task to an external API provided by the browser.
// This API waits for the specified delay (or completes the network request immediatly, etc.) on a separate thread managed by the host environment.
// Once the operation is complete, the API doesn’t execute the callback immediately.
// Instead, Web API places this callback into the "Callback Queue". Where it waits.
