class ComplexNumber{
    constructor(real,imaginary) {
        this.real = real
        this.imaginary = imaginary   
    }
    printNumber(){
        return `${this.real} + ${this.imaginary}i`
    }

    static addTwoNums(com1,com2) {
        return `The sum of ${com1.printNumber()} and ${com2.printNumber()} is = ${com1.real+ com2.real} + ${com1.imaginary+com2.imaginary}i`
    }
}

let com1 = new ComplexNumber(1,2)
console.log(com1.printNumber())

let com2 = new ComplexNumber(2,2)
console.log(ComplexNumber.addTwoNums(com1, com2))


class Human{
    constructor(name, age, employment){
        console.log("This is the human constructor")
        this.name = name
        this.age = age
        this.employment = employment
    }

    printName(){
        return `Hello i am human and my name is ${this.name}`
    }
}

class Student extends Human{
    printName(){
        return `Hello i am human and my name is ${this.name} and my designation is ${this.employment}`
    }
}



let anuj = new Student('anuj',24,'student')
console.log(anuj.printName())

console.log(anuj instanceof Human) 

class ComplexNumber2{
    constructor(real,imaginary) {
        this._real = real
        this._imaginary = imaginary   
    }

    
    getRealNum(){
        return this._real
    }
    setRealNum(num){
        this._real = num
        
    }
    setImagNum(num){
        this._imaginary = num

    }

    getImagNum(){
        return this._imaginary
    }
    printNumber(){
        return `${this._real} + ${this._imaginary}i`
    }

    static addTwoNums(com1,com2) {
        return `The sum of ${com1.getRealNum()} and ${com2.getRealNum()} is = ${com1.real+ com2.real} + ${com1.imaginary+com2.imaginary}i`
    }
}

let a = new ComplexNumber2(2,2)
console.log(a.getRealNum())
a.setRealNum(3)
a.setImagNum(4)
console.log(a.printNumber())