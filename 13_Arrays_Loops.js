console.log("This program deals with looping structures in arrays")

const arrayNum = [1,3,4,5]
arrayNum.forEach((element) => {
    console.log(element)
})

const string_val = 'mohan'
let string_arr = Array.from(string_val)
console.log(string_arr)


for (let i in arrayNum){
    console.log(i) // returns the indices of the array
}

for (let i of arrayNum){
    console.log(i) // returns the values of the array
}