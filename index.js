/* eslint-disable linebreak-style */
const form = document.querySelector('form');
const addButton = document.querySelector('.AddButton');
const titleInput = document.querySelector('.title-input');
const authorInput = document.querySelector('.author-input');
const booksContainer = document.querySelector('.Books-Section');

let bookList = [
  {
    id: 0,
    BookTitle: 'ejjw',
    BookAuthor: 'kknkjdnjen',
  },
  {
    id: 1,
    BookTitle: 'lkmjj',
    BookAuthor: 'ljlk',
  },
];

const updateBooks = () => {
  booksContainer.textContent = '';
  bookList.forEach((book) => {
    let booksSection = `<div class='Book__section'>
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
    })
  );
};

function removeBook(bookId) {
  bookList = bookList.filter((book) => book.id != bookId);
  updateBooks();
}

updateBooks();

addButton.addEventListener('click', (e) => {
  e.preventDefault();
  let Title = titleInput.value;
  let Author = authorInput.value;
  const newBook = {
    id: Date.now(),
    BookTitle: Title,
    BookAuthor: Author,
  };
  bookList.push(newBook);
  updateBooks();
  form.reset();
});
