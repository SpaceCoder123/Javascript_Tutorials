let t = document.body.firstElementChild
console.log(t.firstElementChild) // prints the table
let x = t.firstElementChild
console.log(x.rows) // returns a html collection of tags
console.log(x.tHead)
console.log("table header first child  = "+x.tHead.firstElementChild)
console.log(x.tFoot)