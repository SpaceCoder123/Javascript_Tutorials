console.log("This program deals with assignment 5, Array methods")

// 1 create an array of numbers and take input from the user to add numbers in the array

// let numArr = [1,23,2,87]
let num = prompt("Enter the number to add into the array")
if(Number.parseInt(num)){
    numArr.push(Number.parseInt(num))
    console.log("The number has been added")
}
console.log(numArr)

// 2 Keep adding numbers to the array in Q1 until 0 is added to the array

let numArr = [1,23,2,87]
while(true){
    let num2 = prompt("Enter the number to add into the array")
    let number2 = Number.parseInt(num2)
    if(typeof (number2) === 'number' && number2 != 0){
        numArr.push(number2)
        console.log("The number has been added")
    }
    else if (number2==0){
        console.log("The final array is "+numArr)
        break
    }
    else{
        console.log("Enter a proper number ")
        console.log(typeof(number2))
    }
}

// 3 Filter the numbers that are divisible by 10 in an given input array

let arr4 = [11,20,34,56,0,90,76,59,60]

let filterArray = arr4.filter((value)=>{
    return value % 10 == 0;
})
console.log(filterArray)

// 4 Create an array of square of the numbers

let arr5= [11,20,34,56,0,90,76,59,60]

let SquareArray = arr5.map((value)=>{
    return value * value;
})
console.log(SquareArray)

// 5 Use reduce to calculate factorial of a given number from an array of first n natural numbers 


let sample = prompt("Enter a number to find a factorial")
let factNum = Number.parseInt(sample)

let funcArr = []
for (let i = 0; i<factNum;i++){
    funcArr[i] = factNum-i
}

let factorial_num = funcArr.reduce((num1,num2)=>{
    return num1*num2
})

console.log(factorial_num)
