console.log("This program defines about primitive and datatypes in javascript")
// there are two types of datatypes, primitive and non-primitive datatype

// there are seven types of primitive datatypes 


// 1. Null
let a = null;
// 2. Number
let b = 29;
// 3. String
let c = 'this is a string '
// 4. Boolean
let d = true;
// 5. Undefined
let e = undefined; 
// 6. BigInt
let f = BigInt(123244234);
// 7. Symbol
let g = Symbol("I am a nice symbol")


console.log(typeof(a))
console.log(typeof(b))
console.log(typeof(c))
console.log(typeof(d))
console.log(typeof(e))
console.log(typeof(f))
console.log(typeof(g))

// Objects are non primitive datatypes that are stored in the form 
// of key value pairs

const object1 = {
    'Harry':true,
    'Mohan':false,
    'Lovish': 67,
    'Rohan':undefined
}

console.log(object1['Harry'])
console.log(object1['Mohan'])
console.log(object1['Lovish'])
console.log(object1['Rohan'])