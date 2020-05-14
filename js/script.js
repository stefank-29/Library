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

/*const theHobbit = new Book('adsa', 'dasdasd', 'dsadasd',213, true);
console.log(theHobbit.info());*/
/*  
    TODO * live demo za github
    TODO * okaciti na Odin
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
    let index = 0;  // koji je indeks knjige u biblioteci
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
        genre.textContent = `Genres: ${book.genre == '' ? "Unknown" : book.genre}`;
        const pages = document.createElement('p');
        pages.classList.add("pages");
        pages.textContent = `Pages: ${book.pages}`;
        const read = document.createElement('p');
        read.classList.add("read");
        read.textContent = `Read: ${book.read === "true" ? "Already read" : "Not read yet"}`;
        book.read === "true" ? read.style.color = '#33c55f' : read.style.color = 'red'; // ako je procitana onda zelena ako ne onda crvena
        read.setAttribute('data-index', index);
        read.addEventListener('click', toggleStatus);
        const trash = document.createElement('img');
        trash.classList.add("bin");
        trash.setAttribute('src', "images/trash.png")
        trash.setAttribute('alt', "trash bin icon");
        trash.setAttribute('data-index', index++);
        trash.addEventListener('click', deleteBook); // event listener dinamicki za brisanje

        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(genre);
        card.appendChild(pages);
        card.appendChild(read);
        card.appendChild(trash);
        booksGrid.appendChild(card);   
    });
    if(Array.isArray(myLibrary) && myLibrary.length){ // ako biblioteka nije prazna
        welcomeText.style.display = 'none';
    }else{
        welcomeText.style.display = '';
    }
}

function loadBooks(){
    let retrivedData = localStorage.getItem("MyLibrary");
    myLibrary = JSON.parse(retrivedData);
    if (!(Array.isArray(myLibrary) && myLibrary.length)){ // provera dal je prazan niz
        myLibrary = [];
        return;
    }
    
    render();

}
addBook.addEventListener('click', addBookToLibrary);
window.onload = loadBooks;


