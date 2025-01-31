// Exporting our function using CommonJS Modules
function add(num1, num2) {
  return num1 + num2
}

function multiply(num1, num2) {
  return num1 * num2
}

module.exports = { add, multiply }
