// function scriptLoader(src){
//     return new Promise((resolve,reject)=>{
//         let script = document.createElement("script")
//         script.src = src
//         script.onload = () =>{
//             resolve(true)
//         }
//         script.onerror = () =>{
//             reject(false)
//         }
//         document.head.append(script)
//     })
// }


// let a = scriptLoader("https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js")
// a.then((value)=>{
//     document.getElementById("assignment1solution").innerText = "The script has been loaded, status = "+value
// })
// a.catch((value)=>{
//     document.getElementById("assignment1solution").innerText = "The script cannot be loaded, status = "+value
// })


// const loadScript2 = async (src)=>{
//     return new Promise((resolve,reject)=>{
//         let script = document.createElement("script")
//         script.src = src
//         script.onload = () =>{
//             resolve(src+"Done success")
//         }
//         document.head.append(script)
//     })
// }

// const main2 = async ()=>{
//     let b = await loadScript2("https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js")
//     console.log(b)
//     console.log("Hello")
// }
// console.log(main2())


// const Question3 = async ()=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             reject("The script has been rejected")
//         },3000)
//     })
// }

// const main3 = async (val) =>{
//     try{
//         let c = await Question3();
//     }catch (error){
//         document.getElementById("assignment3solution").innerText = error
//         console.log(error)
//     }
// }
// main3()

// question4
// let p1 = async () =>{
//     return new Promise((resolve,reject)=>{
//         setTimeout (()=>{
//             resolve(20)
//         },3000)
//     })

// }

// let p2 = async () =>{
//     return new Promise((resolve,reject)=>{
//         setTimeout (()=>{
//             resolve(30)
//         },3000)
//     })
// }
// let p3 = async () =>{
//     return new Promise((resolve,reject)=>{
//         setTimeout (()=>{
//             resolve(40)
//         },3000)
//     })
// }

// async function run(){
//     console.time("run")
//     let a1 = await p1()
//     console.log(a1)
//     let a2 = await p2()
//     console.log(a2)
//     let a3 = await p3()
//     console.log(a3)
//     // total run time is around 9 secs
//     console.timeEnd("run")
// }
// run()

// async function run1(){
//     console.time("runn1")
//     let a1 = p1()
//     let a2 = p2()
//     let a3 = p3()
//     let all = await Promise.all([a1,a2,a3])
//     console.log(all)
//     // this runtime is almost 3 secs which saves a lot of time in huge databases therefore saving a lot of time 
//     console.timeEnd("runn1")
//     console.log(runn1)
// }
// run1()