const LoadScript = (src) =>{
    return new Promise((resolve,reject) =>{
        let script = document.createElement("script")
        script.type = "text/javascript"
        script.src = src
        document.body.appendChild(script)
        script.onload = () =>{
            resolve("Script has been loaded")
        }
        script.onerror= () =>{
            reject("There was some error in loading the script")
        }
    })
}

LoadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js")