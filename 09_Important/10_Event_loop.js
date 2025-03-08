// Event loop is the mechanism that coordinates the execution of Synchronous code (on the call stack) and Asynchronous code (from the callback queue).

// Event loop continuously checks if the call stack is empty (i.e., no code is currently running).

// And when the call stack is free, the event loop takes the first callback from the callback queue and pushes it onto the call stack for execution.
// And this process enables JS to handle Asynchronous tasks without truly running them concurrently.


// And event loop prioritize our task based on two main queues:
// 1. Macrotask Queue: setTimeout, setInterval, Network request, UI Rendering etc.
// 2. Microtask Queue (Higher Priority): Promises, queueMicrotask(), process.nextTick() in Node.js
