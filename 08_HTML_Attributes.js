console.log(document.body.getElementsByTagName("p")[0]) // displays just the tag
console.dir(document.body.getElementsByTagName("p")[0]) // display names with properties or as an object

console.log(document.body.firstChild.nodeName) //  since firstchild accounts for the empty spaces as well it shows text
console.log(document.body.firstElementChild.nodeName)  // displays the tag of the first child that is paragraph

let span = document.getElementById("spanTag")
span.innerHTML = '<i> Hello </i>'
console.log(span.outerHTML) // returns the entire html row as the output
// note .innerHTML works only for elements only

console.log(span.textContent) // returns the text content inside the tag

console.log(span.getAttribute("class")) // returns the class name of the attribute
console.log(span.getAttribute("id"))// returns the id name of the attribute

let empty = document.body.getElementsByTagName('p')[0]
console.log(empty.getAttribute("class")) // since the element doesn't have any class attribute therefore returns NULL

empty.setAttribute("class","JSClassSet") // this will set the class name as JSClassSet
console.log(empty)

empty.removeAttribute("class")
console.log(empty) // this will remove the attribute 

console.log(span.dataset) // this is a specific way of adding custom attributes
console.log(span.dataset.game)
console.log(span.dataset.player)


let elementCreate = document.createElement("h1") // creates a new div element in the html
elementCreate.innerText = "hello" // writes the text from the inner HTML
span.append(elementCreate) // adds to the created HTML tag and therefore can be seen in the HTML
span.prepend(elementCreate)

span.insertAdjacentHTML('beforebegin','<p> this is before begin</p>') // these will add html before the parent tag
span.insertAdjacentHTML('beforeend','<p> this is beforeend</p>') // these will add html within the parent tag
span.insertAdjacentHTML('afterbegin','<p> this is afterbegin</p>') // these will add html within the parent tag
span.insertAdjacentHTML('afterend','<p> this is afterend</p>') // // these will add html after the parent tag
span.remove()