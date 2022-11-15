console.log("This code is program guess the number using Javascript, First Exercise")


let randomNum = Math.floor(Math.random()*10+1)
let chances = 3;
while(true){
    let SampleNum = prompt("Enter the number! ")
    let inputNum = Number.parseInt(SampleNum)
    if (inputNum == randomNum){
        chances--
        console.log("Congratulations! You have the guessed the number with "+chances+" chances!")
        break;
    }
    else{
        chances--;
        console.log("Sorry you have guessed the wrong number ")
        switch(chances){
            case 2:
                console.log("HINT!")
                console.log("The missing number is between "+(randomNum+3) +" and "+(randomNum-3))
                break
            case 1:
                console.log("HINT!")
                console.log("The missing number is between "+(randomNum+2) +" and "+(randomNum-2))
                break
            case 0:
                console.log("Sorry dear User! You have lost the game")
                break
            default:
                console.log("Technical Glitch! Please contact the admin")
                break
        }       
        if (chances == 0){
            break
        }
    }
}