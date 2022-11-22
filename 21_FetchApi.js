let p = fetch("https://collectionapi.metmuseum.org/public/collection/v1/objects/1")
console.log(p)
p.then((val)=>{
    // console.log(val.json()) // returns a response
    // console.log(val.ok)
    // console.log(val.status)
    // console.log(val.text())
    // console.log(val.headers)
    return val.json()
}).then((val1)=>{
    console.log(val1.repository) // this will return 404 not found
})
