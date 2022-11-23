console.log("This program deals with Events in JS browser")

function onHover(){
    let targetElement = document.body.getElementsByClassName("container")
    targetElement[0].style.background = 'red'
}
function onHoverRemove(){
    let targetElement = document.body.getElementsByClassName("container")
    targetElement[0].style.background = 'white'
}