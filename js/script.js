let myLibrary = [];
const booksGrid = document.querySelector("#books");
const newBook = document.querySelector("#newBook");
const popup = document.querySelector(".bg-modal");
const close = document.querySelector(".close");

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
const theHobbit2 = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
const theHobbit3 = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
const anaKarenjina = new Book("Ana Karenjina", "Lav Tolstoj", 745, true);

//console.log(theHobbit.info());
addBookToLibrary(theHobbit);
addBookToLibrary(theHobbit2);
addBookToLibrary(theHobbit3);
addBookToLibrary(anaKarenjina);
addBookToLibrary(theHobbit);
addBookToLibrary(anaKarenjina);
render();
//console.table(myLibrary);


/*
    TODO 2) modal popup window
    TODO 3) sacuvati podatke iz forme u objekat
    TODO 4) kantica za brisanje knjiga
    TODO 5) button za selektovanje dal je knjiga procitana
    TODO * filter za sortiranje po parametrima
*/
    
newBook.addEventListener('click', showPopup);
close.addEventListener('click', closePopup)

function showPopup(){
    popup.style.display = "flex";
}
function closePopup(){
    popup.style.display = "none";
}

function addBookToLibrary(book){
    myLibrary.push(book);
}

function removeBooks(){ 
    const booksGrid = document.querySelector("#books");
    let child = booksGrid.lastElementChild;
    while(child){
        booksGrid.removeChild(child);
        child = booksGrid.lastElementChild;
    }

}
function render(){
    removeBooks();
    myLibrary.forEach(book => {
        const card = document.createElement('div');
        card.classList.add("book");
        const title = document.createElement('p');
        title.classList.add("title");
        title.textContent = book.title;
        const author = document.createElement('p');
        author.classList.add("author");
        author.textContent = `Author: ${book.author}`;
        const pages = document.createElement('p');
        pages.classList.add("pages");
        pages.textContent = `Pages: ${book.pages}`;
        const read = document.createElement('p');
        read.classList.add("read");
        read.textContent = `Read: ${book.read ? "Yes" : "Not read yet"}`;
        
        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(pages);
        card.appendChild(read);
        booksGrid.appendChild(card);   
    });
    
}