//library array
let myLibrary = [];

//select elements
const bookGrid = document.querySelector(".books-grid");
const displayBook = document.querySelector(".book");
const displayTitle = document.querySelector(".title");
const displayAuthor = document.querySelector(".author");
const displayPages = document.querySelector(".page");
const displayReadStatus = document.querySelector(".read");

const addBookButton = document.querySelector(".addBookButton");
const popup = document.querySelector(".popup-wrapper");
const close = document.querySelector(".close");

const form = document.querySelector(".popup-content");

//add books to array from the form input field
const inputTitle = document.querySelector("#title");
const inputAuthor = document.querySelector("#author");
const inputPages = document.querySelector("#pages");
const inputRead = document.querySelector("#isRead");
const uploadButton = document.querySelector(".upload");

//create book constructor
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// myLibrary.push(new Book("the hobbit", "anoos", 232, true));
// myLibrary.push(new Book("the lord of the rings", "saif", 323, false));
// myLibrary.push(new Book("harry potter", "athul", 354, false));
// myLibrary.push(new Book("cucek", "abrar", 534, true));
// myLibrary.push(new Book("castle black", "aslam", 234, true));

// Book.prototype.info = function () {
//   return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
// };

// let theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 234, "not read yet");

//add book to library function
function addBookToLibrary(title, author, pages, read) {
  let book = new Book(title, author, pages, read);

  myLibrary.push(book);
}

// display every books added from library array
function updateDisplay() {

  

  myLibrary.forEach((book) => {
    let bookCard = document.createElement("div");
    console.log(book);
    bookGrid.appendChild(bookCard);
    bookCard.classList.add("book");

    let booktitle = document.createElement("p");
    booktitle.textContent = book.title;
    booktitle.classList.add("title");
    bookCard.appendChild(booktitle);

    let bookAuthor = document.createElement("p");
    bookAuthor.textContent = book.author;
    bookAuthor.classList.add("author");
    bookCard.appendChild(bookAuthor);

    let bookPages = document.createElement("p");
    bookPages.textContent = book.pages;
    bookPages.classList.add("page");
    bookCard.appendChild(bookPages);

    let bookRead = document.createElement("p");
    bookRead.textContent = book.read;
    bookRead.classList.add("read");
    bookCard.appendChild(bookRead);
  });
}



//add or remove pop UP
function showPopUp() {
  popup.style.display = "block";
  inputTitle.value = "";
  inputAuthor.value = "";
  inputPages.value = "";
}

function hidePopUp() {
  popup.style.display = "none";
}

addBookButton.addEventListener("click", showPopUp);

close.addEventListener("click", hidePopUp);

form.addEventListener("submit", (e) => {
  console.log(e);
  if (form.reportValidity()) {
    console.log("checking");
    const title = inputTitle.value;
    const author = inputAuthor.value;
    const pages = inputPages.value;
    let read = "";
    inputRead.checked ? (read = "Completed") : (read = "Not Completed");
    addBookToLibrary(title, author, pages, read);
    hidePopUp();
  }
  e.preventDefault();
  console.log(myLibrary);
  updateDisplay()
});

