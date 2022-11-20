// console.log("This is program that deals with promises")
// let targetElement = document.getElementById('Promises')
// targetElement.innerText = 'The solution of the call back hell is promises, A promise is a promise of code execution, the code either executes or fails, '

// targetElement.innerText = 'The user will be notified irrespective of the result'

// let promise = new Promise((resolve,reject)=>{
//     console.log('hello')
//     resolve(56)
// })

// let targetElement2 = document.getElementById("PromiseState")
// targetElement2.innerText = 'There are two stages in a promise, state and  a result, they are both inaccessible, they are either resolved and reject things, Promises are used for parellel execution of the code'


// console.log("Hello")
// setTimeout(()=>{
//     console.log("I was in the callback function and  my result will appear after 4 secs")
// },4000) // the timer will run after the items in the inner loops are completely executed
// console.log("done")


// console.log(promise)

// // fetch google.com    homepage => console.log("google.com homepage done")
// // fetch data from data api
// // fetch pictures from the server
// // print downloading 
// // rest of the script 

// // 2 - Vid 55
// let p1 = new Promise((resolve,reject)=>{
//     console.log("The promise is still pending")
//    setTimeout(()=>{
//     console.log("Your promise has not been fulfilled")
//     reject(new Error("This promise was not fulfilled"))
//    },2000)
// })

// let p2= new Promise((resolve,reject)=>{
//     console.log("The promise is still pending")
//    setTimeout(()=>{
//     console.log("Your promise has been fulfilled") // note line 35 and 43 are running in parellel
//     resolve("Your promise has been resolved") 
//    },2000)
// })


// p2.then((value)=>{
//     console.log("inside then function, the output is = "+value) // the code inside line resolve in line 44 has been printed
// })

// p1.catch((value)=>{
//     console.log("if the value of the promise is rejected then the output is = "+value)
// })

// // promise chaining 
// // we can chain promises and make them pass the resolved values to one another 
// // call p2 function

// let p3= new Promise((resolve,reject)=>{
//     console.log("The promise is still pending, your are in p3 promise")
//    setTimeout(()=>{
//     console.log("Your promise has been fulfilled, in P3") // note line 35 and 43 are running in parellel
//     resolve("Your promise has been resolved, in P3") 
//    },2000)
// })

// p3.then((value)=>{
//     console.log("inside then function, the output is = "+value) // the code inside line resolve in line 44 has been printed
//     let p4 =  new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve('Promise2')
//         },2000)
//     })
//     return p4;
// }).then((value)=>{
//     console.log("We are done with "+value)
// })

// mainly in step 1, we are handling the promise of p3,
// after the execution of p3 we are handling the success terms in p3.then but there is another promise p4 created in p3 promise, 
// in order to handle the new promise created in p4, we need to create another .then function to capture the output
// so the setTimeout of p4 inside p3 will be make the last .then wait which is declared for the completion of the code and then
// the output of p4 is executed and therefore is called Promise Chaining

const LoadScript = (src) =>{
    return new Promise((resolve,reject) =>{
        let script = document.createElement("script")
        script.type = "text/javascript"
        script.src = src
        document.body.appendChild(script)
        script.onload = () =>{
            resolve("Script has been loaded in LoadscriptFunction")
        }
        script.onerror= () =>{
            reject("There was some error in loading the script")
        }
    })
}

let p1 = LoadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js")
p1.then((value) => {
    console.log("This has passed the first .then "+value)
    return LoadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js")
}).then((value)=>{
    console.log("Second script ready "+value)
}).catch((error)=>{
    console.log("We are sorry, we are having problem loading the script -> "+error) 
    // this will throw error no matter whether the first .then fails or second .then
})