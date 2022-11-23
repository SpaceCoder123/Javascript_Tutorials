// Create a navbar and change the color of its first element to red 
function Question1(){
    let firstElement = document.body.getElementsByClassName('navbar')[0].firstElementChild
    firstElement.firstElementChild.style.color = 'red'
}

function Question3(){
    let targetFirstElement = document.getElementById("father").firstElementChild
    targetFirstElement.style.color = 'red'
    let targetLastElement = document.getElementById("father").lastElementChild
    targetLastElement.style.color = 'green'
}

function Question4(){
    let liAll = document.body.getElementsByTagName('li')
    liAll_arr = Array.from(liAll)
    console.log(liAll_arr.length)
    for( let i = 0; i<liAll_arr.length; i++){
        liAll_arr[i].style.background = 'cyan'
    }

}   