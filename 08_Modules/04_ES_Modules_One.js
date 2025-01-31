// Export a single "main" value (e.g., a class, function, or object) using "export default"
// If multiple value, you can use "export" keyword

export const printName = function (name) {
  return `Your name: ${name}`
}

export const calculateYear = function () {
  return Date.now()
}
