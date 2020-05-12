/*const bins = document.querySelectorAll(".bin");
bins.forEach(bin => bin.addEventListener('click', deleteBook));*/

function deleteBook(e){
    let index = this.dataset.index;
    myLibrary.splice(index, 1); // brisem jedan element 
    localStorage.setItem("MyLibrary", JSON.stringify(myLibrary));
    render();
}