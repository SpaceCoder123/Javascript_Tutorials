<<<<<<< HEAD
let num1 = Math.floor(Math.random()*10+1)
console.log(num1)
=======
let sample = 6
let factNum = Number.parseInt(sample)

let funcArr = []
for (let i = 0; i<factNum;i++){
    funcArr[i] = factNum-i
}

let factorial_num = funcArr.reduce((num1,num2)=>{
    return num1*num2
})

console.log(factorial_num)
>>>>>>> HTML_CSS_JS_Test
