/*const bins = document.querySelectorAll(".bin");
bins.forEach(bin => bin.addEventListener('click', deleteBook));*/

function deleteBook(e){
    let index = this.dataset.index;
    myLibrary.splice(index, 1); // brisem jedan element 
    localStorage.setItem("MyLibrary", JSON.stringify(myLibrary));
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

const sortSelect = document.querySelector("#sort");
sortSelect.addEventListener('change', sortBooks);

function sortBooks(){
    //let sortedBooks;
    if(this.value == 'asc'){
        myLibrary = myLibrary.sort((a, b) =>{
            return a.title > b.title ? 1 : -1;
        });  
    }else if(this.value == 'desc'){
        myLibrary = myLibrary.sort((a, b) => {
            return a.title > b.title ? -1 : 1;
        })
    }else if(this.value == 'read-first'){
        myLibrary = myLibrary.sort((a, b) =>{
            return a.read == 'true' && b.read == 'false' ? -1 : 1;
        });  
    }else if(this.value == 'unread-first'){
        myLibrary = myLibrary.sort((a, b) =>{
            return a.read == 'true' && b.read == 'false' ? 1 : -1;
        });  
    }
    render();
    
}

const hTitle = document.querySelector("#headerTitle");
hTitle.addEventListener('click', () => {
    location.reload();
})

const welcomeText = document.querySelector("#onloadText");
