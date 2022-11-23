console.log("This program deals with Assignment 3")

// 1. Write a program to print out the marks of a student in an object using a for loop
const obj = {harry:98,rohan:70,aakash:7}
for (let i =0; i< Object.keys(obj).length; i++){
    console.log("The marks of the student " + Object.keys(obj)[i] + " in obj are " + obj[Object.keys(obj)[i]])
}


// 2. Write a program to print out the marks of a student in an object using a for in loop
// const obj = {harry:98,rohan:70,aakash:7}
for (let i in obj){
    console.log("The marks of "+i+" is " + obj[i])
}

// 3. Write a program to print "try again" until the user enters the right number
while(true){
    let number = prompt("Enter a number")
    if(Number.parseInt(number)){
        console.log("You have entered a right number")
        break;
    }
    else{
        console.log("Please enter a proper number")
    }
}

// 4. Write a function to find a mean of 5 numbers

function Average5num(num1,num2,num3,num4,num5){
    return (num1+num2+num3+num4+num5)/5;
}

console.log(Average5num(1,23,4,5,42))