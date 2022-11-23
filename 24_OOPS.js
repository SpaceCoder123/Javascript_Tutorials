class Book{
    constructor(name, author, date){
        this.name = name
        this.author = author
        this.date = date;
    }

    itemInClass(){
        console.log("The name of the book is "+this.name+" written by "+this.author+" on "+this.date)
    }
}



let Book1 = new Book("The song of ice and fire",'George R.R Martin','23-11-22')
Book1.itemInClass()