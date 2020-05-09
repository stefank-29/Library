let myLibrary = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
} 
Book.prototype.info = function(){
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? "already read" : "not read yet"}`;
}
const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
//console.log(theHobbit.info());
addBookToLibrary(theHobbit);
//console.table(myLibrary);

function addBookToLibrary(book){
    myLibrary.push(book);
}
