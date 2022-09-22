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

myLibrary.push(new Book("the hobbit", "anoos", 232, true));


// Book.prototype.info = function () {
//   return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
// };

//add book to library function
function addBookToLibrary(title, author, pages, read) {
  let book = new Book(title, author, pages, read);
  myLibrary.push(book);
}

// display added book (adding the book to book)
function updateDisplay() {
  myLibrary.forEach((book, index) => {
    let bookCard = document.createElement("div");

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

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("button", "deleteButton");
    deleteButton.setAttribute("data-index", index);
    bookCard.appendChild(deleteButton);
  });

  //delete Button
  const deleteButton = document.querySelectorAll(".deleteButton");
  deleteButton.forEach((button) => {
    button.addEventListener("click", () => {
      console.log("clicked");
      const index = button.getAttribute("data-index");
      myLibrary.splice(index, 1);
      console.log(index);
      clearDisplay();
      updateDisplay();
    });
  });
}

//function to clear display
function clearDisplay() {
  let books = document.querySelectorAll(".book");
  console.log(books);
  books.forEach((book) => {
    book.remove();
  });
}

//delete button function
// let deletebtn = document.querySelector(".deleteButton");
// deletebtn.addEventListener('click', ()=>{

// })

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

//add books to array from the form input field and update display

form.addEventListener("submit", (e) => {
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

  clearDisplay();
  updateDisplay();
});

