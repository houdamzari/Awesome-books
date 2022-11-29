/* eslint-disable max-classes-per-file */
const form = document.querySelector('form');
const addButton = document.querySelector('.AddButton');
const titleInput = document.querySelector('.title-input');
const authorInput = document.querySelector('.author-input');
const booksContainer = document.querySelector('.Books__Section');

class Book {
  constructor(title, author, id) {
    this.title = title;
    this.author = author;
    this.id = id;
  }
}

class Library {
  constructor() {
    this.bookList = [];
    const localData = localStorage.getItem('bookList');
    if (localData !== null) {
      this.bookList = JSON.parse(localData);
    }
  }

  removeBook(bookId) {
    this.bookList = this.bookList.filter(
      (book) => book.id !== parseInt(bookId, 10),
    );
  }

  storeBooks() {
    localStorage.setItem('bookList', JSON.stringify(this.bookList));
  }

  updateBooks() {
    booksContainer.textContent = '';
    this.bookList.forEach((book) => {
      const booksSection = `<div class='Book__section'>
    <div class='Book__section-item'>${book.title} by ${book.author}</div>
    <button class='remove-button' id="${book.id}">Remove</button>
   </div>`;
      booksContainer.innerHTML += booksSection;
    });
    const removeButtons = document.querySelectorAll('.remove-button');
    removeButtons.forEach((button) => button.addEventListener('click', (e) => {
      this.removeBook(e.target.id);
      this.updateBooks();
    }));
    this.storeBooks();
  }
}

const library = new Library();
library.updateBooks();

addButton.addEventListener('click', (e) => {
  e.preventDefault();
  const Title = titleInput.value;
  const Author = authorInput.value;
  const newBook = new Book(Title, Author, Date.now());
  library.bookList.push(newBook);
  library.updateBooks();
  form.reset();
});
