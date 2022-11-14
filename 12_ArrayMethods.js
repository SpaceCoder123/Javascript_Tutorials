console.log("The program deals with array methods")

// convert an entire of numbers to string

const arrayNum = [1,3,4,5]
console.log(typeof(arrayNum[1]))

console.log("After using toString method")


let b = arrayNum.toString()
console.log(b)
console.log(typeof(b[1]))

let c = arrayNum.join("-") // converts an entire array into a single string 
console.log(c)
console.log(c[1])
console.log(typeof(c))


console.log(arrayNum)
console.log("---------       After popping         --------------")
let d = arrayNum.pop()
console.log(arrayNum)
console.log(d) // this returns the popped element


console.log(arrayNum)
console.log("---------       After pushing        --------------")
arrayNum.push(2)
arrayNum.push(3)
console.log(arrayNum) // adds the element at the end of the array or the last index