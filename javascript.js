let myLibrary = []; 

function Book() {
    this.title = document.getElementById("bookTitle").value;
    this.author = document.getElementById("bookAuthor").value;
    this.pages = document.getElementById("numberPages").value;
    //this.read = document.getElementById("read").value;
}

function addBookToLibrary() {
    let myBook = new Book();
    myLibrary.push(myBook);
    createBookCard();
    return false;
}

function callForm() {
    document.querySelector(".new-book").addEventListener("click", () => {
    
        //Form
        const theForm = document.getElementById("theForm");

        //Form div
        const bookForm = document.createElement("div");
        bookForm.classList.add("form");

        //Form title
        const newBook = document.createElement("div");
        newBook.classList.add("new-book");
        newBook.innerHTML = "New Book";

        //Book title entry
        const title = document.createElement("div");
        title.classList.add("title");
        const lblTitle = document.createElement("label");
        lblTitle.setAttribute("for", "bookTitle");
        lblTitle.innerHTML = "Title";
        const inTitle = document.createElement("input");
        inTitle.setAttribute("type", "text");
        inTitle.setAttribute("id", "bookTitle");
        inTitle.setAttribute("name", "book-name");
        inTitle.setAttribute("required", "true");

        //Book Author entry
        const author = document.createElement("div");
        author.classList.add("author");
        const lblAuthor = document.createElement("label");
        lblAuthor.setAttribute("for", "bookAuthor");
        lblAuthor.innerHTML = "Author";
        const inAuthor = document.createElement("input");
        inAuthor.setAttribute("type", "text");
        inAuthor.setAttribute("id", "bookAuthor");
        inAuthor.setAttribute("name", "book-author");
        inAuthor.setAttribute("required", "true");

        //Book number of pages entry
        const numPages = document.createElement("div");
        numPages.classList.add("num-pages");
        const lblNumP = document.createElement("label");
        lblNumP.setAttribute("for", "numberPages");
        lblNumP.innerHTML = "Number of Pages";
        const inPages = document.createElement("input");
        inPages.setAttribute("type", "number");
        inPages.setAttribute("id", "numberPages");
        inPages.setAttribute("name", "pages");
        inPages.setAttribute("required", "true");

        //Book others entry
        /*const others = document.createElement("div");
        others.classList.add("others");
        const readC = document.createElement("div");
        readC.classList.add("read-check");
        const lblOthers = document.createElement("label");
        lblOthers.setAttribute("for", "read");
        lblOthers.innerHTML = "Read";
        const inRead = document.createElement("input");
        inRead.setAttribute("type", "checkbox");
        inRead.setAttribute("id", "read");
        inRead.setAttribute("value", "true");
        inRead.setAttribute("name", "read");*/

        //Book submit button
        const addButton = document.createElement("div");
        addButton.classList.add("add-book");
        const addbtn = document.createElement("button");
        addbtn.setAttribute("type", "submit");
        addbtn.classList.add("addBook");
        addbtn.innerHTML = "Add Book";

        //Append
        bookForm.appendChild(newBook);
        title.appendChild(lblTitle);
        title.appendChild(inTitle);
        bookForm.appendChild(title);
        author.appendChild(lblAuthor);
        author.appendChild(inAuthor);
        bookForm.appendChild(author);
        numPages.appendChild(lblNumP);
        numPages.appendChild(inPages);
        bookForm.appendChild(numPages);
        /*readC.appendChild(lblOthers);
        readC.appendChild(inRead);
        others.appendChild(readC);
        bookForm.appendChild(others);*/
        addButton.appendChild(addbtn);
        bookForm.appendChild(addButton);
        theForm.appendChild(bookForm);

        
    })
}

function createBookCard() {
    for(let book of myLibrary) {
        console.log(book);
    }
}


callForm();
//addBookToLibrary();
//console.log(myLibrary);