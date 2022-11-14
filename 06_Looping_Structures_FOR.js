console.log("This program deals with loops")

// loops are used for performing repeated actions for single block of code
// types of loops in javascript\

// always use let in the case of loops and looping structure
// for loop

for(i = 0;i < 5;i++){   
    console.log(i)
} // prints the value until the condition becomes false

// for (statement 1, statement 2, statement 3){
//     // statement 1 executes only once
//     // statement 2 is the condition in which the loop runs
//     // statement 3 is executed everytime the loop is executed
// }

let num1 = prompt("Enter the number until which you have to implement the natural numbers")
let sum = 0
n= Number.parseInt(num1)
for (i = 0; i < num1; i++){
    sum +=i
    console.log(i)
}

console.log(sum)
// for in 

const obj = {
    'student1' : 20,
    'student2' : 30,
    'student3' : 32,
    'student4' : 40
}

for (let i in obj){
    console.log("The marks of the student "+  i +" is "+obj[i]) // i prints the keys in the object 'obj'
}

// for out

for (let b of "Mohan"){ // note the operand must be an iterable
    console.log(b)
}


// while 
// do while