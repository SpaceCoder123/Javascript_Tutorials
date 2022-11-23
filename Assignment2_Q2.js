function renderCard(id, main,body){
    let mainBlock = document.getElementById("main-block")
    mainBlock.innerHTML+= `<div class="col" style="height: 300px; width: 400px; margin: 20px;border: none; id = "${id}">
    <div class="card h-100" >
      <div class="card-body">
        <h5 class="card-title" id="card_subject">${main}</h5>
        <p class="card-text" id="card_body">${body}</p>
      </div>
      <div class="card-footer" style="background-color: white;">
        <button type="button" class="btn btn-secondary" style="margin-right: 180px;" onclick="checker()"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="30" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
          <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
          <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
        </svg></button>
        <button type="button" class="btn btn-success"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="30" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
          <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
        </svg></button>
      </div>
    </div>
  </div>`
}


function getInput(){
    let SubjectText = document.getElementById("floatingTextarea1").value
    let BodyText = document.getElementById("floatingTextarea2").value
    if(SubjectText.length == 0){
        document.getElementById("floatingTextarea1").placeholder = 'The title should contain atleast one character'
        document.getElementById("floatingTextarea1").style.border = `2px solid red`
        let timeout = setTimeout(()=>{
            document.getElementById("floatingTextarea1").style.border = `2px solid white`
        },800)
    }
    renderCard(1,SubjectText,BodyText)
    document.getElementById("floatingTextarea1").value= ""
    document.getElementById("floatingTextarea2").value = ''
    return [cardSubject.innerText, cardBody.innerText] 
}

function checker(){
    let val1 = getInput()
    console.log(val1[0],val1[1])
}


function addLocalStorage(id ,main, body){
    let obj = {'main': main, "body":body}
    localStorage.setItem(id, obj)
    console.log("The item has been added")
}


