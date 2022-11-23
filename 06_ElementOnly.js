let b = document.body
console.log("firstchild of b is "+b.firstChild) // this has text since it has considered text after the body tag
// suppose if we have to select the element only no matter how much spaces are present
console.log("firstchild Element of b is "+ b.firstElementChild) // this returns the first element child no matter how much spaces are present

const changeBgRed = ()=>{
    document.getElementById('spanTag').style.background = 'magenta' // changes the element background color to magenta
}
changeBgRed()