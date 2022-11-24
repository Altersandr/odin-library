let myLibrary = [
//     {
//     name: "At the Mountains of Madness",
//     author: "H.P. Lovecraft"
// },{
//     name: "Sherlock Holmes",
//     author: "Arthur Conan Doyle"
// },{
//     name: "Lords of the Rings",
//     author: "J.R.R. Tolkien"
// }
];



function Book(name, author, pages, cover){
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.cover = cover;
    return this
}

const addBook = document.getElementById('add');
addBook.addEventListener('click', addBookToLibrary);

function addBookToLibrary(e){
        e.preventDefault();
        
        const inputName = document.getElementById('bookname').value;
        const inputAuthor = document.getElementById('authorname').value;
        const inputPages = document.getElementById('pages').value;
        const inputCover = document.getElementById('cover').value;
        const newBook = new Book(inputName, inputAuthor, inputPages, inputCover);
        myLibrary.push(newBook)
        
        const container = document.getElementById('main-container');
        container.innerHTML = "";
        
        myLibrary.forEach(book=>{
        let bookentry = document.createElement('div');
        bookentry.classList = "book";
        let author = document.createElement('div');
        author.classList = "author";
        author.textContent = book.author
        let name = document.createElement('div');
        name.classList = "name";
        name.textContent = book.name;
        let pages = document.createElement("div");
        pages.classList = "pages";
        pages.textContent = book.pages + " pages";
        // console.log(bookentry);
        bookentry.style.backgroundImage = `url(${inputCover})`;
        
        bookentry.dataset.id = myLibrary.indexOf(book);
        bookentry.appendChild(author);
        bookentry.appendChild(name);
        bookentry.appendChild(pages);
        container.appendChild(bookentry);

        let controls = document.createElement('div');
        controls.id = "controls";
        let readBtn = document.createElement('button');
        readBtn.textContent = 'Read';
        let deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'deleteBtn';
        deleteBtn.dataset.id = myLibrary.indexOf(book);
        // console.log(deleteBtn.dataset.id)
        controls.appendChild(readBtn);
        controls.appendChild(deleteBtn);
        bookentry.appendChild(controls);
        bookentry.addEventListener('mouseover', (e)=>{
            const deleteBtns = document.querySelectorAll('.deleteBtn');
            deleteBtns.forEach(btn =>{
            // console.log(deleteBtns)
            btn.addEventListener('click', deleteBook(btn))
})
            
                controls.style.display = "block";
            })
            bookentry.addEventListener('mouseout', (e)=>{
                controls.style.display = "none";
            })
        }
        )

    }

function deleteBook(button){
    const id = button.dataset.id;
    myLibrary.splice(id, 1)
    console.log(id)
    console.log(myLibrary)
};


