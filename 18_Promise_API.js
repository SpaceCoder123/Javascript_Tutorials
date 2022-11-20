let p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
            resolve("this is resolve in p1")
    },3000)
})
let p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
            resolve("this is resolve in p2")
    },2000)
})
let p3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
            resolve("this is resolve in p3")
    },4000)
})
// this is about promise.all
setTimeout(()=>{
    arr = [p1,p2,p3]
    let promise_all = Promise.all(arr)
    let output = promise_all.then((value)=>{
        console.log(value) // this will return after all the values in an array
    })
},2500)

// Note, promise.all will not run if there are any conflicts in the program

setTimeout(()=>{
    arr = [p1,p2,p3]
    let promise_all = Promise.all(arr)
    let output = promise_all.then((value)=>{
        console.log(value) // this will return after all the values in an array
    })
},2500)



setTimeout(()=>{
    arr = [p1,p2,p3]
    let promise_all = Promise.allSettled(arr) // this will return an object of the promise
    let output = promise_all.then((value)=>{
        console.log(value) // this will return the result of all the promises in an object
    })
},2500)

arr = [p1,p2,p3]
let promise_all = Promise.race(arr) // this will return whichever promise finished first that is resolved
let output = promise_all.then((value)=>{
    console.log(value) // this will return the result of all the promises in an object
})

setTimeout(()=>{
    arr = [p1,p2,p3]
    let promise_all = Promise.any(arr) // this will return whichever promise finished first that is either resolved or not
    let output = promise_all.then((value)=>{
        console.log(value) // this will return the result of all the promises in an object
    })
},900)
