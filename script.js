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

//show or hide form modal
addBookButton.addEventListener("click", () => {
  popup.style.display = "block";
  inputTitle.value = "";
  inputAuthor.value = "";
  inputPages.value = "";
  inputRead.checked = false;
});

close.addEventListener("click", () => (popup.style.display = "none"));

//create book constructor
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

//add book to library and display

form.addEventListener("submit", (e) => {
  popup.style.display = "none";
  //check validity
  if (form.reportValidity()) {
    const title = inputTitle.value;
    const author = inputAuthor.value;
    const pages = inputPages.value;
    let read = "";
    inputRead.checked ? (read = "Completed") : (read = "Not Completed");
    let book = new Book(title, author, pages, read);
    myLibrary.push(book);
  }
  e.preventDefault();
  clearDisplay();
  updateDisplay();
});

//remove book
function removeBook() {
  const deleteButton = document.querySelectorAll(".deleteButton");
  deleteButton.forEach((button) => {
    button.addEventListener("click", () => {
      const index = button.getAttribute("data-index");
      myLibrary.splice(index, 1);
      clearDisplay();
      updateDisplay();
    });
  });
}

Book.prototype.updateStatus = function (index, value) {
  myLibrary[index].read = value;
};

//update read status
function updateReadStatus() {
  const readStatus = document.querySelectorAll(".read");
  readStatus.forEach((status) => {
    status.addEventListener("click", () => {
      const index = status.getAttribute("data-index");
      let update = Object.create(Book.prototype);
      if (myLibrary[index].read === "Completed") {
        update.updateStatus(index, "Not Completed");
        status.classList.add('notCompleted')
      } else {
        update.updateStatus(index, "Completed");
        status.classList.add("completed");
      }
      clearDisplay();
      updateDisplay();
    });
  });
}

// display added book
function updateDisplay() {
  myLibrary.forEach((book, index) => {
    createBookCards(book, index);
  });
  removeBook();
  updateReadStatus();
}

//create book cards
function createBookCards(book, index) {
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
  bookRead.setAttribute("data-index", index);
  bookCard.appendChild(bookRead);

  let deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.classList.add("button", "deleteButton");
  deleteButton.setAttribute("data-index", index);
  bookCard.appendChild(deleteButton);
}

//function to clear display
function clearDisplay() {
  let books = document.querySelectorAll(".book");
  books.forEach((book) => {
    book.remove();
  });
}

updateDisplay();

//create button to edit read status
