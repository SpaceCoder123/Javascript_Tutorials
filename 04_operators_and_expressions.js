console.log("This file deals with operators and expressions!")

// a fragment of code that produces a value is called an expression

// arithmatic operators, deals with basic mathematical expressions

let a = 1;
let b = 2;
console.log(a+b) // addition operator
console.log(a/b) //  division operator
console.log(a-b)// subtraction operator
console.log(a*b)// multiplication operator
console.log(a++)// post increment operator // address will have the old value 
console.log(++b)// pre increment operator // reference will have the old value
console.log(a**b)// power operator
console.log(a%b)// modulo operator

// assignment and comparison operators - returns boolean
console.log(a=b)
console.log(a==b)
console.log(a<b)
console.log(a>b)
console.log(a>=b)
console.log(a<=b)
console.log(a+=b) // returns the incremented number using the second operand
console.log(a!=b)

// Logical Operators // also returns booleans and can be used for conditional 
// statements
console.log("Logical operators")
console.log(a!=b && a>b)
console.log(a==b && a<b)
console.log(a!=b || a<b)
console.log(a==b || a<b)