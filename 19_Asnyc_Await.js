// there is a special syntax in javascript that is present that is called Async and Await

// async ensures the function returns a promise and wraps non promises in it 

// async function f1(name){
//     console.log("You are inside f1 function! Dear "+name)
//     return 0 // note async returns a promise to the function
// }

// f1("mohan").then((val)=>{
//     console.log(val) // this is will hold the return value
// })


async function harry(){
    let delhiWeather = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("27 deg")
        },3000)
    })

    let BangaloreWeather = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("21 deg")
        },4000)
    })
    console.log("Fetching Delhi Weather! Please wait ")
    let delhiW = await delhiWeather // this will wait until this function is finished
    console.log("Fetched Delhi Weather " +delhiW)
    console.log("Fetching Bangalore Weather! Please wait ")
    let BangaloreW = await BangaloreWeather
    console.log("Fetched Bangalore Weather " +BangaloreW)
    return [delhiW,BangaloreW]
}

const cherry = (()=>{
    console.log("this is a cherry function and i am not waiting")
})
 // note both the functions in 40 and 41 run in parellel
cherry() // if both the functions are async then the second async function will finish after the first function is finished

let out = harry();