// arrays are just a collection of items

const array1 = [1,2,3,4,null,false,'Not present'] // any datatype can be added inside an array
console.log(array1[0])
console.log(array1[1])
console.log(array1[2])
console.log(array1[3])
console.log(array1[4])
console.log(array1[5])
console.log(array1[6])

array1[8] = 87
array1[4] = 'hello'
// if the value is not present then it shows as empty item
console.log(array1)
console.log("The length of the array is "+array1.length)
// array as mutable and can be changed
// array is an object
console.log(typeof(array1))

for (let i = 0; i<array1.length;i++){
    console.log(array1[i])
}