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

const container = document.querySelector(".container"); 

function displayLibrary() {
    let rows = myLibrary.length
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
        let td1 = document.createElement("td");
        let removeButton = document.createElement("button");
        removeButton.textContent = "remove";
        removeButton.name = `${i.bookId}`;
        removeButton.addEventListener("click", removeBook);
        td1.appendChild(removeButton);
        tr.appendChild(td1);

        let td2 = document.createElement("td");
        let toggleButton = document.createElement("button");
        toggleButton.textContent = "change read status";
        toggleButton.name = `${i.bookId}`;
        toggleButton.addEventListener("click", ()=>{
            i.toggleReadStatus();
        });
        td2.appendChild(toggleButton);
        tr.appendChild(td2);

        table.appendChild(tr);
    }
    container.appendChild(table);
}

function removeBook(e) {
    let id = e.target.name;
    for(let i=0; i<myLibrary.length; i++) {
        if(myLibrary[i].bookId === id) {
            myLibrary.splice(i,1);
        }
    }
    container.textContent = '';
    displayLibrary();
}

Book.prototype.toggleReadStatus = function() {
    this.isRead = (this.isRead == "is already read") 
                ? "is not read yet" 
                : "is already read";
    container.textContent = '';
    displayLibrary();
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
    container.textContent = '';
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