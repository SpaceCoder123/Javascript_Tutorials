function loadScript(src, callback) {
    var script = document.createElement("script");
    script.src = src;
    script.onload = function() {
            console.log("Loaded script with SRC: " + src)
            callback(null, src);
    }
    script.onerror = function() {
            console.log("Error loading script with SRC: " + src);
            callback(new Error("Src got some error"))
    }
    document.body.appendChild(script);
}

function hello(error, val){
    if(error){
        alert(error)
        return;
    }
    alert("HelloWorld " +val) 
}

 loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/1js/bootstrap.bundle.min.js", function hello(error,src){
    if(error){
        console.log(error)
        console.log("Wrong link") // suppose this has to open another link or another function
    }})
    console.log("Script one has been loaded") 
    loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js", function hello(error,src){
        if(error){
            console.log(error)
            console.log("Wrong link") // now this has to open another function // we keep adding exceptions to the links if they are wrong which make the 
            // entire structure as pyramid and therefore is called pyramid of hell or callback hell and therefore we use promises to handle all the 
            // properties error code in one shot
        }
        })
        console.log("Script two has been loaded") 
        loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js", function hello(error,src){
            if(error){
                console.log(error)
                console.log("Wrong link")
                // note we have to write exceptions to every time we call a link or a script
            }
            })
            console.log("Script three has been loaded") 
            loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js", function hello(error,src){
                if(error){
                    console.log(error)
                    console.log("Wrong link")
                }
                })
                console.log("Script four has been loaded") 