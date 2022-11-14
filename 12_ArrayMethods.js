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


console.log(arrayNum)
delete arrayNum[1]
console.log("---------       After deleting        --------------")
console.log(arrayNum)

array2 = [23,42,53,66,17,54]
console.log("---------       After concatination        --------------")
let newArray = arrayNum.concat(array2)
console.log(newArray)

// note the original arrays will not be altered or disturbed

let sortedarrayNum = newArray.sort()
console.log("---------       After sorting        --------------")
console.log(sortedarrayNum)
console.log(newArray)
// note the array used in the sort function will be changed as well

sortedarrayNum.splice(1,3,1023,2121,2323) 
// splice(starting index, number of elements to be deleted, elements to add)
// does not modify the original array
console.log(sortedarrayNum)

console.log(sortedarrayNum.slice(2)) // returns an array after the second index
console.log(sortedarrayNum.slice(2,6)) // returns an array after the second index and sixth index (excluding) 
// does not modify the original array
console.log(sortedarrayNum)