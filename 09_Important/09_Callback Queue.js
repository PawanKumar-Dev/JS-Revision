// Callback queue (sometimes referred to as the "task queue" or "message queue") is a list where callbacks are held until JS is ready to execute them.

// How It Works: When an external API finishes its task (say, a timer expires or a network response arrives), it pushes the callback function into the callback queue.

// These callbacks then wait until the main execution thread (the call stack) is free.
// Note: Even if a callback function returns a value, it’s not assigned automatically. Its role is solely to be executed later when the JS engine gets around to handling it.
