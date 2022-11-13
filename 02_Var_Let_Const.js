console.log("Javascript tutorial 3: var let and const")
var a = 45;
var b = 'Harry';
var c = null;
var d = undefined;
let e = 'overwrite';
const author = 'mohan';
// ; // returns an error that the const value cannot be changed

{
    let b = 'this is a let variable'
    console.log(b)
    let e = 'overwritten';
    let author = 'Author:- harry';
    console.log(author)
    console.log(e)
     
} // this is a block



console.log(b) 


// note the var variable got over-writtten as let variable
// and then after completion of the block statement then 
// the var variable got executed
