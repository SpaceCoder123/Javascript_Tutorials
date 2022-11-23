console.log("This program deals with JS alerts, confirm and Prompt")
alert("your script works") // note this value cannot be stored in a variable
const val = prompt("Please enter a value") // prompt value can be stored inside a variable
alert("You entered "+ val)

let write =  confirm("Do you want to write the value in the html page")

if (write){ // write stores a boolean and if it is true then the program will write output (i.e Line 9)
    document.write("You have entered "+val) // this will write the output in the html file
}

// note all these methods are used for simplicity