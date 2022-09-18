//select elements
const bookGrid = document.querySelector(".books-grid");
const book = document.querySelector(".book");
const title = document.querySelector(".title");
const author = document.querySelector(".author");
const page = document.querySelector(".page");
const read = document.querySelector(".read");

const addBookButton = document.querySelector(".addBookButton");
const popup = document.querySelector(".popup-wrapper");
const close = document.querySelector(".close");
//library array
let myLibrary = [];

//create book constructor
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

myLibrary.push(new Book("the hobbit", "anoos", 232, true));
myLibrary.push(new Book("the lord of the rings", "saif", 323, false));
myLibrary.push(new Book("harry potter", "athul", 354, false));
myLibrary.push(new Book("cucek", "abrar", 534, true));
myLibrary.push(new Book("castle black", "aslam", 234, true));

Book.prototype.info = function () {
  return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
};

let theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 234, "not read yet");

//add book to library function
function addBookToLibrary() {
  let title = prompt("what is the title of book");
  let author = prompt("who is the author of book");
  let pages = prompt("Number of Pages");
  let read = confirm("reading Completed? Yes/N0");

  myLibrary.push(new Book(title, author, pages, read));
}

// display every books added from library array
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

addBookButton.addEventListener("click", () => {
  popup.style.display = "block";
});

close.addEventListener("click", () => {
  popup.style.display = "none";
})



//add books to array from the form input field