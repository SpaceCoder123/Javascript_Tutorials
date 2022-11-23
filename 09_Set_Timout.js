alert("Hello")

let runner = ((user)=>{
    alert("Hello World! "+ user)
})

setInterval(runner,10000,'mohan') // this runs after ten seconds

// setInterval(function,delay,arg1) // arg depends on the number of input parameter the function takes // this will run the function recursively 
// this is the prime diffrence between setInterval and setTimeout

