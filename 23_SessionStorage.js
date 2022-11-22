// sessionStorage.setItem("name",'mohan')



window.onstorage =(e)=>{
    alert("The local storage has been modified")
    console.log(e)

}

sessionStorage.setItem("name",'mohan3')
sessionStorage.setItem("name",'mohan4')