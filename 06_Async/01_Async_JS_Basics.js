// JS operates synchronously by default. Meaning code get executed one by one. And run in single-threaded way. But has the capability to be asynchronous.

// There are two types of codes exceution in JS:
// 1) Blocking Code : code executes one by one. new code will execute if only previous code is completed.
// 2) Non-blocking Code : many code can execute parallely. so code is not blocked.


// JS engine only contains our "execution-context": which have call stack and Heap memory.
// To make it async we add different things to this base JS engine.
// In browser environment, JS engine run with others like "browser web apis", "task queues" and "high priority queues".


// Whenever we run browser events, we are accessing our DOM apis of browser.
// Functions like setTimeout(), setInterval(), fetch() are part of DOM apis actually. We can check this by running console.log("window") cmnd.


// Task Queues:  they manage our async request and decide which is sent to JS engine and when.


// High Priority Queues: manage our urgent aysnc request such as "promises". They have higher priority in async queue.


// Note: So yes JS Engine operates as Syncronus and single-thread operation. But JavaScript as language is aynsc in nature.
// Becoz we always JS in environments where Aysnc features are baked into it.
