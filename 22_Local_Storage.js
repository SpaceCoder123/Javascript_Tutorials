// localStorage.setItem("name","mohan") // setting up the name of the user
// console.log(localStorage.getItem("name")) // retrieving the item 

// console.log(`The value of name is  ${localStorage.getItem("name")}`)

// localStorage.removeItem('name')
// localStorage.clear()

localStorage.setItem("name","pavan")
localStorage.setItem("name1","arun")
// console.log(localStorage.key(0)) // returns the value of the element associated with the key
// console.log(localStorage.length)

for(let i = 0; i<localStorage.length;i++){
    console.log(localStorage.getItem(localStorage.key(i)))
    // console.log(localStorage.length)
}