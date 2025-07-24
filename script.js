const myLibrary = [];

function Book(title, author, pagesCount, isRead) {
    this.title = title;
    this.author = author;
    this.pagesCount = pagesCount;
    this.isRead = isRead ? "is already read" : "is not read yet";
}

Book.prototype.info = function() {
    return `${this.title} by ${this.author}, ${this.pagesCount} pages, ${this.isRead}`;
}

function addBookToLibrary(title, author, pagesCount, isRead) {
    let bookObj = new Book(title, author, pagesCount, isRead);
    const bookId = crypto.randomUUID()
    bookObj.bookId = `${bookId}`;
    myLibrary.push(bookObj);
}

function displayLibrary() {
    let rows = myLibrary.length
    const container = document.querySelector(".container"); 
    let table = document.createElement("table");
    let tr = document.createElement("tr");
    for (j of Object.keys(myLibrary[0])) {
        let th = document.createElement("th");
        th.textContent = `${j}`;
        tr.appendChild(th);
    }
    table.appendChild(tr);
    for (let i of myLibrary) {
        console.log(i);
        console.log(Object.keys(i));
        let columns = i.length;
        let tr = document.createElement("tr");
        for (let j of Object.keys(i)) {
            let td = document.createElement("td");
            td.textContent = `${i[j]}`;
            tr.appendChild(td);
            console.log(`${i[j]}`);
        }
        table.appendChild(tr);
    }
    container.appendChild(table);
}

const btn = document.querySelector(".new-btn");
btn.addEventListener("click", showForm);

function showForm() {
    const formDiv = document.querySelector(".form");
    formDiv.setAttribute("style", "display:block");
}

const myForm = document.querySelector("#myForm");
myForm.addEventListener("submit", addNewBook);

function addNewBook(e) {
    e.preventDefault();
    const inputs = document.querySelectorAll("input");
    const bookDetails = [...inputs].map(item => item.value);
    addBookToLibrary(...bookDetails);
    console.log(myLibrary);
    console.log("new book added");
    displayLibrary();
}

let a = "a";
let b = "b";
let c = "c";
let d = "d";
addBookToLibrary(a,b,c,d);
addBookToLibrary(a,b,c,d);
addBookToLibrary(a,b,c,d);
addBookToLibrary(a,b,c,d);
addBookToLibrary(a,b,c,d);
displayLibrary();