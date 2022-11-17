let container = ['rock','paper','scissor']
let computerPoints = 0
let userPoints = 0
let gamestatus = 0
PlayGame()

function PlayGame(){
    let userChoice = prompt("Enter your choice")
    let computerChoice = container[Math.floor(Math.random()*3)]
    let result = BackgroundLogic(userChoice,computerChoice)
    document.getElementById("UserChoice").innerText = "You chose "+userChoice + " User points = "+userPoints
    document.getElementById("ComputerChoice").innerText = "Computer chose "+computerChoice + " Computer Points = "+computerPoints
    document.getElementById("GameStatus").innerText = result
}
function reset(){
    let computerPoints = 0
    let userPoints = 0
    let gamestatus = 0
}
function BackgroundLogic(userChoice, computerChoice){
    if((userChoice === "rock") && (computerChoice === "scissor")){
        userPoints += 1
        gamestatus += 1
        return "User Won"
    }
    if((userChoice === "rock") && (computerChoice === "paper")){
        computerPoints += 1
        gamestatus -= 1 
        return "Computer Won"
    }
    if((userChoice === "scissor") && (computerChoice === "paper")){
        computerPoints += 1
        gamestatus -= 1 
        return "User Won"
    }
    if((userChoice === "paper") && (computerChoice === "rock")){
        userPoints += 1
        gamestatus += 1
        return "User Won"
    }
    if((userChoice === "scissor") && (computerChoice === "rock")){
        userPoints += 1
        gamestatus += 1
        return "Computer Won"
    }
    
    if((userChoice === "paper") && (computerChoice === "scissor")){
        computerPoints += 1
        gamestatus -= 1
        return "Computer Won"
    }
    if((userChoice === "scissor") && (computerChoice === "scissor")){
        gamestatus = 0
        return "Draw"
    }
    if((userChoice === "paper") && (computerChoice === "paper")){
        gamestatus = 0
        return "Draw"
    }
    if((userChoice === "rock") && (computerChoice === "rock")){
        gamestatus = 0      
        return "Draw"
    }
}