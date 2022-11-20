// Asynchronus actions are the type of actions that we initiate but will process the task in the background or finish later. 
// Synchronus actions are the type of action that follows step by step process 

// Callback function is a function passed into another function as an argument where the function reference is taken into reference 
// which is invoked inside the outer function to complete an action

function LoadScript(src,Callback){ // basically the function declared in line 17 is passed as a reference inside the loadScript function
    var script = document.createElement("script");
    script.src = src;
    script.onload = function(){ // upon loading the script 
        Callback(null,'mohan') // this and the function in line 12 gets called and runs
        alert("Script loaded with src") // and gets finished 
    }
    script.onerror= function(){
        console.log("Error loading the script with SRC "+src) // this function will run if there are any error in the script loading
        Callback(new Error("Src got some error"))
    }
    document.body.appendChild(script); // the above all the operation are added to the script
    alert("The program has been completed")
}

function hello(error, val){
    if(error){
        alert(error)
        return;
    }
    alert("HelloWorld " +val) 
}

// LoadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js",hello)  // this is a proper url
/// this is called callback style of asynchronous programming. 

// A program that does something asynchronously should provide a callback argument where we put the function to run after the processes are complete

// note after running the program on the server, line 15 ran first, line 11 ran second, Line 12 ran at the last, which means the onload program ran in 
// the first but processed in the background and all the rest of the lines ran later

LoadScript("https://cdn.jsdelivr.net/npm/aabootstrap@5.2.2/dist/js/bootstrap.bundle.min.js",hello)  // this is an improper url


