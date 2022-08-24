let myLibrary = []; 

function Book() {
    this.title = prompt("Please enter the book title: ", "Title");
    this.author = prompt("Please enter the book author: ", "Author");
    this.pages = prompt("Please enter the book number of pages: ", "0");
    this.language = prompt("Please enter the book language: ", "English");
    this.read = prompt("Have you read it? ", "yes");
}

function addBookToLibrary() {
    let myBook = new Book();
    myLibrary.push(myBook);
}

//addBookToLibrary();
//console.log(myLibrary);