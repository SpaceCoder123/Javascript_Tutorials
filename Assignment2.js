console.log("This program deals with the assignment part of the course")

// 1. use logical operators to find whether the age of the person is 
// in between 10-20

var age = 24;
if (age <= 20 && age >= 10){
    console.log("Found! ")
}
else{
    console.log("Not found! ")
}

// 2. Demonstrate the use of switch case statements in Javascript

var age2 = 18;
switch (age2){
    case(18):
        console.log("You can use cardio")
        break;
    case(20):
        console.log("You can use Weights")
        break;
    case(22):
        console.log("You can use HeavyWeights")
        break;
    default:
        console.log("You can only do warmup")
        break;
}

// 3. Write a javascript program that can print whether a number is divisible 
// by 2 and 3

var num = 7;
if((num %2 == 0) && (num % 3 == 0)){
    console.log("Found! ")
}
else{
    console.log("Not Found! ")
}

// 4. Write a javascript program that can print whether a number is divisible 
// by 2 or 3

var num = 4;
if((num %2 == 0) || (num % 3 == 0)){
    console.log("Found! ")
}
else{
    console.log("Not Found! ")
}

// 5. Print "you can drive" or "you cannot drive " based on the age if it is
// greater than 18 using TERNARY OPERATOR
var age3 = 16
console.log((age3<18)?"Ineligible to drive":"Eligible to drive")