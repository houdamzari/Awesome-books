/* eslint-disable linebreak-style */
let arr = [
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

const addButton = document.querySelector('.AddButton');
const title = document.querySelector('.title-input');
const author = document.querySelector('.author-input');
const booksContainer = document.querySelector('.Books-Section');

let Title = '';
let Author = '';
let booksSection = '';

const BookFunction = () => {
  arr.forEach((book) => {
    booksSection += ` <div class='Book__section'>
  <div class='Book__section-item'>${book.BookTitle}</div>
  <div class='Book__section-item'>${book.BookAuthor}</div>
  <button class='remove-button'>Remove</button>
</div>`;
    booksContainer.innerHTML = booksSection;
  });
};
arr.forEach((book) => {
  booksSection += ` <div class='Book__section'>
  <div class='Book__section-item'>${book.BookTitle}</div>
  <div class='Book__section-item'>${book.BookAuthor}</div>
  <button class='remove-button'>Remove</button>
</div>`;
});

addButton.addEventListener('click', (e) => {
  e.preventDefault();
  Title = title.value;
  Author = author.value;
  const newBook = {
    id: arr.length + 1,
    BookTitle: Title,
    BookAuthor: Author,
  };
  console.log(newBook);
  arr.push(newBook);
  BookFunction();
});
booksContainer.innerHTML = booksSection;
