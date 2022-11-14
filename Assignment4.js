console.log("This program deals with Assignment 4")


// 1. What will be the output of the string 
console.log("har\"".length)

// 2. Explore startsWith and endsWith Methods on string
let string = "Code with Harry"
console.log(string.startsWith("C"))
console.log(string.endsWith("y"))

// 3. Write a program to convert a given string to lowercase
console.log(string.toLowerCase())

// 4. Extract the amount in the disk
let sample_Str = "Please give Rs 1000"
console.log(sample_Str.slice(15))

// 5. Try to change the fourth character in the first string 
let string2 = "Harish"
string2[1] = 'b' // returns the qoutes or the escape character in the string
console.log(string2[1] = 'b',string2) //note strings are immutable