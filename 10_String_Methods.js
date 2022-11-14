console.log("This program deals with string methods")

let string = "String"
let string2 = "Mohan Ram"
let string3 =  "      Mohan Ram      "
console.log(string.length)
console.log(string.toUpperCase())
console.log(string.toLowerCase())
console.log(string.slice(2,4)) // prints character at 2 and 3
console.log(string.slice(2)) // prints character at 2 till the end of the string
console.log(string2.replace("Ram","Idiot")) 
// replaces a particular set of characters 1st argument with 2nd argument
console.log(string3.trim()) // removes all the empty spaces

// note the original string will NOT be altered

console.log()