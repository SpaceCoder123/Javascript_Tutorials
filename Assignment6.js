function Assignment1(){
   let agestr = prompt("Please enter your age! Dear Sir")
   let age = Number.parseInt(agestr)
   if(age<0){
    document.getElementById("Assignment1Output").innerText = "The value of age cannot be negative"
   }
   else if(age<18){
        document.getElementById("Assignment1Output").innerText = "The user cannot drive due to age limit"
        let val = confirm("Do you want to re-enter the age again?")
        if(val){
            Assignment1();
        }
   }

   else{
    document.getElementById("Assignment1Output").innerText = "The user can drive"
    let val = confirm("The user can drive! Do you want to re-enter the age again?")
    if(val){
        Assignment1();
    }
   }

}


function Assignment2(){
    let val = prompt("Enter the value of number")
    let num = Number.parseInt(val)
    if(num>4){
        document.location.href= "https://www.google.com/"
    }
    else{
        document.getElementById("Assignment2Output").innerText = "You entered "+num;
    }
}
function Assignment3(){
    let val = prompt("Enter the value of number")
    let num = Number.parseInt(val)
    switch(num){
        case 1:
            document.body.style.backgroundColor = 'yellow'
            break
        case 2:
            document.body.style.backgroundColor = 'red'
            break
        case 3:
            document.body.style.backgroundColor = 'green'
            break
        default:
            document.getElementById("Assignment3Output").innerText = "You entered "+num+" which is default color in the database";
            document.body.style.backgroundColor = 'white'
            break
    }
}
