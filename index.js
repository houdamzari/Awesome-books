/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable linebreak-style */
const form = document.querySelector('form');
const addButton = document.querySelector('.AddButton');
const titleInput = document.querySelector('.title-input');
const authorInput = document.querySelector('.author-input');
const booksContainer = document.querySelector('.Books-Section');

let localData = localStorage.getItem('bookList');
let bookList = [];

if (localData !== null) {
  bookList = JSON.parse(localData);
}

function removeBook(bookId) {
  bookList = bookList.filter((book) => book.id !== parseInt(bookId));
}

function storeBooks() {
  localStorage.setItem('bookList', JSON.stringify(bookList));
}

function displayLocalBooks() {
  const storedData = localStorage.getItem('bookList');
  console.log(storedData);
}

const updateBooks = () => {
  booksContainer.textContent = '';
  bookList.forEach((book) => {
    const booksSection = `<div class='Book__section'>
  <div class='Book__section-item'>${book.BookTitle} (${book.id})</div>
  <div class='Book__section-item'>${book.BookAuthor}</div>
  <button class='remove-button' id="${book.id}">Remove</button>
  <hr></div>`;
    booksContainer.innerHTML += booksSection;
  });
  const removeButtons = document.querySelectorAll('.remove-button');
  removeButtons.forEach((button) =>
    button.addEventListener('click', (e) => {
      removeBook(e.target.id);
      console.log(e.target.id);
      updateBooks();
    })
  );
  storeBooks();
};

updateBooks();

addButton.addEventListener('click', (e) => {
  e.preventDefault();
  const Title = titleInput.value;
  const Author = authorInput.value;
  const newBook = {
    id: Date.now(),
    BookTitle: Title,
    BookAuthor: Author,
  };
  bookList.push(newBook);
  updateBooks();
  form.reset();
});

const onChange = (e) => {
  e.preventDefault();
  localStorage.setItem('title', titleInput.value);
  localStorage.setItem('author', authorInput.value);
};

let titleStorage = localStorage.getItem('title');
let authorStorage = localStorage.getItem('author');

titleInput.addEventListener('change', onChange);
authorInput.addEventListener('change', onChange);
