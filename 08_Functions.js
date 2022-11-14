console.log("The program deals with functions")

function add(num1,num2,num3){
    return num1+num2+num3
}
// method overloading is not possible in javascript
// function add(num1,num2){
//     return num1+num2
// }


console.log(add(1,2,3))
console.log(add(1,3,3))

const add_arrow = (num1,num2)=>{
    console.log("Returns the arrow function")
    return num1+num2
}

console.log(add_arrow(1,2))