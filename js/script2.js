/*const bins = document.querySelectorAll(".bin");
bins.forEach(bin => bin.addEventListener('click', deleteBook));*/

function deleteBook(e){
    let index = this.dataset.index;
    myLibrary.splice(index, 1); // brisem jedan element 
    //localStorage.setItem("MyLibrary", JSON.stringify(myLibrary));
    render();
}

function toggleStatus(){
    let index = this.dataset.index;
    if(myLibrary[index].read == 'true'){
        myLibrary[index].read = 'false';
    }else{
        myLibrary[index].read = 'true';
    }
    localStorage.setItem("MyLibrary", JSON.stringify(myLibrary));
    render();
    
}