console.log("This program deals with while loops")

// the main structure of the while loop is 

// while (condition = true){
//      condition to be executed
//}

// if the condition never becomes false then the loop will be running and will effect the runtime of the code

let i = 10;
while(i > 0){
    console.log(i);
    i--;
}

// DO while - in this looping structure the while loop inside the DO block will be executed first 
// then the condition is checked

let j = 0
do {
    console.log(j)
    j++; // executes the statement first and then checks the condition 
    // note irrespective of the first loop condition, the first statement will be printed
}
while(j<10)