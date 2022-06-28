/* eslint max-classes-per-file: ["error", 3] */

let i = 0;

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

class Store {
  static getBooks() {
    let books;
    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
  }

  static addBook(book) {
    const books = Store.getBooks();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }

  static removeBook(author) {
    const books = Store.getBooks();
    books.forEach((book, index) => {
      if (book.author === author) {
        books.splice(index, 1);
      }
    });
    localStorage.setItem('books', JSON.stringify(books));
  }
}

class UI {
  static displayBooks() {
    const books = Store.getBooks();
    books.forEach((book) => UI.addBookToList(book));
  }

  static addBookToList(book) {
    const list = document.getElementById('books-container');
    const bookData = document.createElement('div');
    const bookTitle = document.createElement('p');
    const bookAuthor = document.createElement('p');
    const removeBtn = document.createElement('button');
    const line = document.createElement('div');
    bookData.className = 'book delete';
    list.appendChild(bookData);

    bookTitle.classList.add('book-title');
    bookAuthor.classList.add('book-author');
    removeBtn.classList.add('remove-btn');
    line.classList.add('line');
    bookData.setAttribute('id', `dv${i}`);
    bookTitle.setAttribute('id', `bt${i}`);
    bookAuthor.setAttribute('id', `ba${i}`);
    removeBtn.setAttribute('id', `rb${i}`);

    i += 1;
    const btId = bookTitle.getAttribute('id');
    const baId = bookAuthor.getAttribute('id');
    const rbId = removeBtn.getAttribute('id');

    bookData.appendChild(bookTitle);
    bookData.appendChild(bookAuthor);
    bookData.appendChild(removeBtn);
    bookData.appendChild(line);

    document.getElementById(btId).textContent = book.title;
    document.getElementById(baId).textContent = book.author;
    document.getElementById(rbId).textContent = 'Remove';
  }

  static deleteBook(target) {
    target.parentElement.remove();
  }

  static clearFields() {
    document.querySelector('#title-book').value = '';
    document.querySelector('#author-name').value = '';
  }
}

// display Books
document.addEventListener('DOMContentLoaded', UI.displayBooks);

// add a book

const addNewBook = document.querySelector('.add-btn');
addNewBook.addEventListener('click', (e) => {
  e.preventDefault();

  const newTitle = document.querySelector('#title-book').value;
  const newAuthor = document.querySelector('#author-name').value;

  // validate
  if (newTitle === '' || newAuthor === '') {
    alert('please fill in all fields');
  } else {
    const book = new Book(newTitle, newAuthor);

    // add book to UI
    UI.addBookToList(book);
    // add book to store
    Store.addBook(book);
    // Clear fields
    UI.clearFields();
  }
});

// remove Books

document.querySelector('#books-container').addEventListener('click', (e) => {
  e.preventDefault();
  // remove book from UI
  UI.deleteBook(e.target);
  // remove from store
  Store.removeBook(e.target.previousElementSibling.textContent);
});
