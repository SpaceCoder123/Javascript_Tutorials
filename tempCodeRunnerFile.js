let arr2 =[45,23,21]
let b = arr2.map((value,index,array)=>{
    console.log(value,index,array) 
    return value + 1
})
console.log(b)