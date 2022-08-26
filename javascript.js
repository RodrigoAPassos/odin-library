let myLibrary = []; 
let numCards = 0;

function Book() {
    this.title = document.getElementById("bookTitle").value;
    this.author = document.getElementById("bookAuthor").value;
    this.pages = document.getElementById("numberPages").value;
    this.num = numCards;
    //this.read = document.getElementById("read").value;
}

function addBookToLibrary() {
    let myBook = new Book();
    myLibrary.push(myBook);
    createBookCard();
    numCards++;
    const theForm = document.getElementById("theForm");
    const bookForm = document.querySelector(".form");
    theForm.removeChild(bookForm);
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
        inTitle.setAttribute("maxlength", "13");
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
        inAuthor.setAttribute("maxlength", "13");
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
    console.log(myLibrary[numCards]);
    //library
    const lib = document.querySelector(".library");
    //book card
    const bookCard = document.createElement("div");
    bookCard.classList.add("bookCard");
    //book label
    const bookLabel = document.createElement("div");
    bookLabel.classList.add("book-label");
    //title
    const cardTitle = document.createElement("p");
    cardTitle.innerHTML = myLibrary[numCards].title;
    //author
    const cardAuthor = document.createElement("p");
    cardAuthor.classList.add("hidden");
    cardAuthor.innerHTML = "Author: " + myLibrary[numCards].author;
    //pages
    const cardPages = document.createElement("p");
    cardPages.classList.add("hidden");
    cardPages.innerHTML = myLibrary[numCards].pages + " pages";

    //append
    bookLabel.appendChild(cardTitle);
    bookLabel.appendChild(cardAuthor);
    bookLabel.appendChild(cardPages);
    bookCard.appendChild(bookLabel);
    lib.appendChild(bookCard);
    spyBook();
    stopSpyBook();
}

function spyBook() {
    const aBook = document.querySelectorAll(".bookCard");
    aBook.forEach((book) => {
        book.addEventListener("mouseover", () => {
            book.classList.add("spy");
        })
    })
}

function stopSpyBook() {
    const aBook = document.querySelectorAll(".bookCard");
    aBook.forEach((book) => {
        book.addEventListener("mouseout", () => {
            book.classList.remove("spy");
        })
    })
}

stopSpyBook();
spyBook();
callForm();
//addBookToLibrary();
//console.log(myLibrary);