// Built-in constants on the Math object—such as Math.PI, Math.E, Math.LN10, and so on—are defined as read-only.
// This means you cannot change their values.

console.log(Object.getOwnPropertyDescriptor(Math, "PI"));

/* Output typically similar to:
{
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false
}
*/

// And when we try to change value of PI, in strict mode we get "TypeError". But things remain unchanged in non-strict mode.
// If we want custom PI value, it's way better to define your own constant.

// JS property descriptors give you a granular control over how object properties behave.
// We can customize aspects of a property such as whether it can be changed, enumerated (looped over), or reconfigured.
