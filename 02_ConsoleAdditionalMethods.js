console.log("This program deals additional console commands")
console.error("Hey this is an error") // returns a red line or warning in the console
console.assert(5>54) // returns an error message , if the value is true then, there are no errors

const obj = {a:1, b:2, c:3}
console.table(obj) // returns the object in tabular form and returns the datatype as well

console.warn("Hey please dont drink soda") // this returns a yellow bar and therefore does not effect the runtime 

console.time("p1") // starts the timer 

console.timeEnd("p1") // ends the timer 