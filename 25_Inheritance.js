class Animal{ // this is a parent class
    constructor (name, type){
        this.name = name
        this.type = type
        console.log("This is an Animal Constructor and whatever methods running inside the class belongs to class Animal")
    }
    description(){
        console.log("The name of the animal is "+this.name+" and it is a "+this.type)
    }
    run(){
        console.log("The "+this.name+" is running! ")
    }
    shouting(){
        console.log("The "+this.name+" is shouting! ")
    }
    hasBrain(){
        console.log("The "+this.name+" doesn't have a proper brain")
    }
}


class Monkey extends Animal{ // this is a child class
    eatBanana(){
        console.log("This "+this.name+" is eating banana! ")
    }
}

class Zebra extends Animal{
    hasStripes(){
        console.log(`This ${this.name} has stripes since it is a zebra ${this.type}`)
    }
}

class Human extends Animal{
    constructor(name,type,category){
        super(name,type,category)
        console.log(`this is a newly written constructor, with the name of ${name} and of category ${category}`)
    }
    hasBrain(){ // note there is a function with a same name but the properties inside the function has been changed
        super.hasBrain() // super keyword is used to access the method of the parent class inside the child
        console.log("This "+this.name+" has a brain to solve logical problems")
    }
}
// let chimpu = new Monkey('chimpu','Monkey')
// chimpu.eatBanana()
// let zebru = new Zebra('zebru','Zebra')
// zebru.hasStripes()
// zebru.eatBanana() // note this class cannot be accessed since it is a child class but it cann be accessed if you inherit the monkey class

let human = new Human('ash','human','male')  // note the data inside the constructor is executed without running 
// human.hasBrain()
let monk = new Monkey("chimpu",'monkey','male')
monk.description()