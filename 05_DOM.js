document.getElementById('spanTag').style.color = 'red'
document.getElementById('outputTag').innerText = document.body.firstChild

for(let i = 0; i<document.body.childNodes.length;i++){
    document.write(document.body.childNodes[i]) 
}