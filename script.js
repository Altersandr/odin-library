let myLibrary = [

];


class Book {
    constructor(name, author, pages, cover){
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.cover = cover;
    }
}

function createBook(){
        const title = document.getElementById('bookname').value;
        const author = document.getElementById('authorname').value;
        const pages = document.getElementById('pages').value;
        const cover = document.getElementById('cover').value;
        return new Book(title, author, pages, cover);  
}


const addBook = document.getElementById('add');
addBook.addEventListener('click', addBookToLibrary);

function addBookToLibrary(){
        const newBook = createBook();
        if(newBook.name ===''||newBook.author===''||newBook.pages===""||newBook.cover==="")return
        event.preventDefault()
        myLibrary.push(newBook)
        const container = document.getElementById('main-container');
        container.innerHTML = "";
        
        myLibrary.forEach(book=>{
        let bookentry = document.createElement('div');
        bookentry.style.backgroundImage = `url(${book.cover})`;
        bookentry.style.backgroundSize = '100%';
        bookentry.classList = "book";
        let author = document.createElement('div');
        author.classList = "author";
        author.textContent = book.author
        let name = document.createElement('div');
        name.classList = "name";
        name.textContent = book.name;

        let pages = document.createElement("div");
        pages.classList = "pages";
        pages.textContent = book.pages;

        
        bookentry.dataset.id = myLibrary.indexOf(book);
        bookentry.appendChild(author);
        bookentry.appendChild(name);
        bookentry.appendChild(pages);
        container.appendChild(bookentry);

        let controls = document.createElement('div');
        controls.id = "controls";
        let readBtn = document.createElement('button');
        readBtn.textContent = 'Read';
        readBtn.className = 'readBtn';
        let deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'deleteBtn';
        deleteBtn.dataset.id = myLibrary.indexOf(book);

        deleteBtn.addEventListener('click', ()=>{
            const mainContainer = document.getElementById('main-container');
            let btnId = deleteBtn.dataset.id;
            myLibrary.splice(btnId, 1);
            mainContainer.removeChild(deleteBtn.parentElement.parentElement)
        })

        readBtn.addEventListener('click', (e)=>{
            if(e.target.className === "readBtn"){
            e.target.className = "unreadBtn";
            e.target.textContent = "Unread"
        }else{
            e.target.className = "readBtn";
            e.target.textContent = "Read"
        }
        })

        controls.appendChild(readBtn);
        controls.appendChild(deleteBtn);
        bookentry.appendChild(controls);
        
        bookentry.addEventListener('mouseover', (e)=>{
            controls.style.display = "block"; 
            })
        bookentry.addEventListener('mouseout', (e)=>{
            controls.style.display = "none";
            })
        }
        )

    }
