


// //console.log(rahul) // note this is an error and therefore we can say the further execution of the code has been stopped

// // note if this is a big program then it might close in the middle of an important operation which is not useful and safe

// //  now there are errors which are purposefully generated to check the logic or whatever the reason it is,
// // but further execution of the code must not be stopped and therefore we use try catch





// setTimeout(()=>{ 
//     console.log("Hacking Wifi, please wait")
// },1000)

// setTimeout(()=>{
//     console.log("Fetching username and password please wait")
// },2000)

// setTimeout(()=>{
//     console.log("Hacking Rahul user ID and Password, please wait")
// },3000)
// setTimeout(()=>{
//     console.log("Hacking Rahul's facebook id , please wait")
// },4000)

// setTimeout(()=>{
//     console.log("Hacking Wifi, please wait")
// },3000)

// // here is the syntax of the code
// try{
//     setTimeout(()=>{
//         // now the above try catch outside the scope of set timeout will not run // this will again close the program abruptly
//         try{
//             console.log(error)     
//         }
//         catch(error){
//             console.log("Some error in the code inside the setTimeout code")
//         }
//     },100) // returns an error after 0.1 secs   
//     console.log(rahul) // this is the schedule code
// }
// catch (error){
//     console.log("error, there is some problem in the above try code "+error) // note the catch block is ignored if the try is executed properly
//     console.log(error.name) // now the error is a reference error and therefore, the name of the error is reference error
//     console.log(error.message) // the message in the error is the message which have defined in error output regarding to the code
// }





// try{
//     console.log(harry)
//     throw new ReferenceError("Harry is not good") // this is a custom error that is printed
// }
// catch(error){
//     // console.log(error,name)
//     console.log(error.message)
//     console.log(error.stack) // this will return all the contents related to errors
// }


// finally block can be used irrespective of whether program has been executed or not

try {
    let a = 0
    console.log("The  program ran successfully "+ b)

}
catch (error){
    throw new SyntaxError("This is not valid syntax")
}
finally{
    console.log("Thank you for using this program, this will run irrespective of try and catch ")
}

function SpecificError(){

}
SpecificError.prototype = new Error();
try{
    throw new SpecificError;
}
catch (e){
    if(e instanceof SpecificError){

    }
    else{
        throw e;
    }
}