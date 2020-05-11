let myLibrary = [];
const booksGrid = document.querySelector("#books");
const newBook = document.querySelector("#newBook");
const popup = document.querySelector(".bg-modal");
const close = document.querySelector(".close");
const cancel = document.querySelector("#cancel");
const addBook = document.querySelector("#addBook");

const title = document.querySelector("#title");
const author = document.querySelector("#author");
const genre = document.querySelector("#genre");
const pages = document.querySelector("#pages");
const read = document.querySelector("#read");
const form = document.querySelector("form");


function Book(title, author, genre,  pages, read){
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.pages = pages;
    this.read = read;
} 
Book.prototype.info = function(){
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? "already read" : "not read yet"}`;
}
const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", "Fantasy", 295, false);
const theHobbit2 = new Book("The Hobbit", "J.R.R. Tolkien", "Fantasy", 295, false);
const theHobbit3 = new Book("The Hobbit", "J.R.R. Tolkien",  "Fantasy",295, false);
const anaKarenjina = new Book("Ana Karenjina", "Lav Tolstoj", "Fantasy", 745, true);

//console.log(theHobbit.info());
/*addBookToLibrary(theHobbit);
addBookToLibrary(theHobbit2);
addBookToLibrary(theHobbit3);
addBookToLibrary(anaKarenjina);
addBookToLibrary(theHobbit);
addBookToLibrary(anaKarenjina);*/
//render();
//console.table(myLibrary);


/*  
    TODO Izgled kartice za knjigu
    TODO 4) kantica za brisanje knjiga
    TODO 5) button za selektovanje dal je knjiga procitana
    TODO * filter za sortiranje po parametrima
    TODO * sortitanje po nazivu
*/
    
newBook.addEventListener('click', showPopup);
close.addEventListener('click', closePopup);
cancel.addEventListener('click', closePopup);

function showPopup(){
    popup.style.display = "flex";
}
function closePopup(){
    popup.style.display = "none";
    title.style.backgroundColor = ''; // resetuje pozadinu na onu iz css-a
    author.style.backgroundColor = '';
    genre.style.backgroundColor = '';
    pages.style.backgroundColor = '';
    form.reset();
}

function addBookToLibrary(e){
    e.preventDefault();
    title.style.backgroundColor = ''; // resetuje pozadinu na onu iz css-a
    author.style.backgroundColor = '';
    genre.style.backgroundColor = '';
    pages.style.backgroundColor = '';
    
    let flag = false;
    if(title.value == ''){
        title.style.backgroundColor = 'rgba(202, 28, 28, 0.596)';
        flag = true;
    }
    if(author.value == ''){
        author.style.backgroundColor = 'rgba(202, 28, 28, 0.596)';
        flag = true;
    }
    /*if(genre.value == ''){
        genre.style.backgroundColor = 'rgba(202, 28, 28, 0.596)';
        flag = true;
    }*/
    if(pages.value == ''){
        pages.style.backgroundColor = 'rgba(202, 28, 28, 0.596)';
        flag = true;
    }
    if(flag){
        return;
    }
    let book = new Book(title.value, author.value, genre.value, pages.value, read.value);
    myLibrary.push(book);
    localStorage.setItem("MyLibrary", JSON.stringify(myLibrary));
    closePopup();
    render();
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
        const genre = document.createElement('p');
        genre.classList.add("genre");
        genre.textContent = `Genre: ${book.genre == '' ? "Unknown" : book.genre}`;
        const pages = document.createElement('p');
        pages.classList.add("pages");
        pages.textContent = `Pages: ${book.pages}`;
        const read = document.createElement('p');
        read.classList.add("read");
        read.textContent = `Read: ${book.read === "true" ? "Already read" : "Not read yet"}`;
        book.read === "true" ? read.style.color = 'green' : read.style.color = 'red'; // ako je procitana onda zelena ako ne onda crvena
        
        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(genre);
        card.appendChild(pages);
        card.appendChild(read);
        booksGrid.appendChild(card);   
    });

}

function loadBooks(){
    let retrivedData = localStorage.getItem("MyLibrary");
    myLibrary = JSON.parse(retrivedData);
    if (!Array.isArray(myLibrary)){ // provera dal je prazan niz
        myLibrary = [];
        return;
    }
    
    render();

}

addBook.addEventListener('click', addBookToLibrary);
window.onload = loadBooks;
