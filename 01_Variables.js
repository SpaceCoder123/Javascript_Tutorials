var a = 67;
console.log(a)

// javascript reserved words cannot be used as variable names
// var and let and const
// const declared variable cannot be mutable 
// var is restricted to only function level 
// let can be used to a program level or block level

function greetVar(){
    var a = 'hello';
    console.log(a);
}

function greetLet(){
    var a = 'hello';
    if (a == 'hello'){
        let b = 'world'
        console.log(a+"  "+b);
    }
    console.log(a,b); // note b cannot be accessed outside the block 
    // why?
    // it is declared inside the IF block and therefore cannot be accessed 
    // outside the IF block 
}

greetVar();
greetLet();