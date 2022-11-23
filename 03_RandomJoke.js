const arr = [
    "My wife told me to stop impersonating a flamingo. I had to put my foot down.",
    " I went to buy some camo pants but couldn’t find any.",
    "I want to die peacefully in my sleep, like my grandfather… Not screaming and yelling like the passengers in his car.",
    " I know they say that money talks, but all mine says is ‘Goodbye.’",
    "My wife just found out I replaced our bed with a trampoline. She hit the ceiling!",
    "People who use selfie sticks really need to have a good, long look at themselves",
    "The last thing I want to do is hurt you; but it’s still on the list.",
    "efore you criticize someone, walk a mile in their shoes. That way, when you do criticize them, you’re a mile away and you have their shoes.",
    "I was riding a donkey the other day when someone threw a rock at me and I fell off. I guess I was stoned off my ass.",
    "6:30 is the best time on a clock, hands down."
]

function JokeGenerator(){
    let targetTextAdd = document.getElementById("cardText")
    let text = arr[Math.floor(Math.random()*10)]
    targetTextAdd.style.fontFamily = "'Open Sans', sans-serif";
    targetTextAdd.innerText = text;
}