class Animal{ // this is a parent class
    constructor (name, type){
        this._name = (name) // this makes the name variable as private method within the class and this method/variable cannot be accessed outside the class
        this.type = type
    }
    walk(){
        return("Animal "+this._name+" is walking! ")
    }
    getName(){
        return this._name
    }
    setName(name){ // this is method which can be used to set the member variable with the input value
        this._name = name
    }
}


let parrot = new Animal()
parrot.setName('Bruno')
console.log(parrot.getName())
console.log(parrot.walk())

// this is instanceof operator in javascript
let b = 1
console.log(parrot instanceof Animal) // if the variable is an instance of the class then line 24 returns True
console.log(b instanceof Animal) // else it returns false
