class Animal{ // this is a parent class
    constructor (name, type){
        this.name = Animal.capitalize(name)
        this.type = type
        console.log("This is an Animal Constructor and whatever methods running inside the class belongs to class Animal")
    }
    static capitalize(name){
        return name.charAt(0).toUpperCase() +name.substr(1,name.length)
    }
    walk(){
        console.log("Animal "+this.name+" is walking! ")
    }
}
// }
// let j = new Animal(Animal.capitalize('jack'))
let k = new Animal('mohan')
k.walk()

// j.capitalize() --> this will not work 