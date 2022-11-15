console.log("This program deals with MAP, FILTER and REDUCE functions")

let arr =[45,23,21]
console.log(arr)

let a = arr.map((value)=>{
    console.log(value) 
    return value + 1
})
console.log(a)

let arr2 =[45,23,21]
let b = arr2.map((value,index,array)=>{
    console.log(value,index,array)  
    // value: returns the value in the array, index: returns the index value, array: prints out the input array
    return value + index
})
console.log(b)



// what is the fundamental difference between MAP and FOR EACH
// MAP function when performing, it creates a new array when the loop gets executed 
// note: if you want to create a new array after the operation then use MAP, 
// else you can use for each just for execution purposes



// Array filter method - filter an array that passes the test

let arr3 = [45,24,10,2,40]
let a3 = arr3.filter((a)=>{
    return a<=10 
}) // this function returns an array which is lesser than or equal to 10

console.log(a3,arr3) // returns an array // does not alter the original method

// reduce method -- reduces the array into a single value

arr4 = [1,2,3,4,5,6,7,8]
const reduce_func = ((a,b)=>{
    return a+b
})

let newArr_Reduced = arr4.reduce(reduce_func)
console.log(newArr_Reduced)

// the execuion of the reduce are in the following ways
// takes 1 and 2 from arr4 (2 arguments specified in the input of the function)
// adds them up and stores in heap memory, the value is 3
// now takes the first element as the stored variable as first number and takes 3 in arr4 as the second number
// adds the number and stores in heap, the new number is 6
// now takes the first element as the stored variable as first number and takes 4 in arr4 as the second number
// adds the number and stores in heap, the new number is (6+4) 10
// now takes the first element as the stored variable as first number and takes 5 in arr4 as the second number
// adds the number and stores in heap, the new number is (10+5) 15
// now takes the first element as the stored variable as first number and takes 6 in arr4 as the second number
// adds the number and stores in heap, the new number is (15+6) 21
// now takes the first element as the stored variable as first number and takes 7 in arr4 as the second number
// adds the number and stores in heap, the new number is (21+7) 28
// now takes the first element as the stored variable as first number and takes 8 in arr4 as the second number
// adds the number and stores in heap, the new number is (28+8) 36

// which is final output-> 36 , note every iteration the array length and index value is checked and therefore
// if the array value is invalid or the array length is out of bounds then the execution of the reduce statement stops
