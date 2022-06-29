/* eslint max-classes-per-file: ["error", 3] */

/* Declaration of sections */
const titleDisplay = document.querySelector('.main-title');
const list = document.getElementById('books-container');
const formSection = document.querySelector('.add-form');
const contactSection = document.querySelector('.contact');
const pg1 = document.querySelector('#pg1');
const pg2 = document.querySelector('#pg2');
const pg3 = document.querySelector('#pg3');
let i = 0;

// create add book page

const formContainer = document.createElement('form');
const bookTitleImput = document.createElement('input');
const bookAuthorInput = document.createElement('input');
const addBtnForm = document.createElement('button');
// set classes
formContainer.className = 'form-class';
bookTitleImput.className = 'title-book';
bookAuthorInput.className = 'author-name';
addBtnForm.className = 'add-btn';
// set atributes
formContainer.setAttribute('id', 'form');
formContainer.setAttribute('action', 'add-book');
formContainer.setAttribute('name', 'form');
bookTitleImput.setAttribute('id', 'title-book');
bookTitleImput.setAttribute('type', 'text');
bookTitleImput.setAttribute('name', 'title');
bookTitleImput.setAttribute('placeholder', 'Title');
bookTitleImput.setAttribute('maxlength', 60);
bookAuthorInput.setAttribute('id', 'author-name');
bookAuthorInput.setAttribute('type', 'text');
bookAuthorInput.setAttribute('name', 'author');
bookAuthorInput.setAttribute('placeholder', 'Author');
bookAuthorInput.setAttribute('maxlength', 30);
addBtnForm.setAttribute('type', 'button');
addBtnForm.textContent = 'Add';
// add book append child system
formSection.appendChild(formContainer);
formContainer.appendChild(bookTitleImput);
formContainer.appendChild(bookAuthorInput);
formContainer.appendChild(addBtnForm);

// create contact page

const contactParagraph = document.createElement('p');
const contactParagraph2 = document.createElement('p');
const contactUl = document.createElement('ul');
const contactli1 = document.createElement('li');
const contactli2 = document.createElement('li');
const contactli3 = document.createElement('li');
// contact classes
contactParagraph.className = 'contact-text';
contactParagraph2.className = 'contact-text';
contactUl.className = 'contact-ul';
contactli1.className = 'contact-li';
contactli2.className = 'contact-li';
contactli3.className = 'contact-li';
// contact set atribute
contactParagraph.setAttribute('id', 'contact-text');
contactli1.setAttribute('id', 'contact-mail');
contactli2.setAttribute('id', 'contact-phone');
contactli3.setAttribute('id', 'contact-address');
// contact append child
contactSection.appendChild(contactParagraph);
contactSection.appendChild(contactParagraph2);
contactSection.appendChild(contactUl);
contactUl.appendChild(contactli1);
contactUl.appendChild(contactli2);
contactUl.appendChild(contactli3);
// contact data text
contactParagraph.textContent = 'Do have any questions or you just want to say "Hello"?';
contactParagraph2.textContent = 'You can reach out to us!';
contactli1.textContent = 'Our e-mail: mail@mail.com';
contactli2.textContent = 'Our phone number: 004-358-6534-422';
contactli3.textContent = 'Our address: Streetname 22, 84503 City, Country.';

// display main page

function displayMainPage() {
  titleDisplay.textContent = 'All awesome books';
  list.classList.toggle('active');
  pg1.classList.toggle('active');
}
displayMainPage();

document.querySelector('#pg1').addEventListener('click', (e) => {
  e.preventDefault();
  titleDisplay.textContent = 'All awesome books';
  list.classList.toggle('active');
  pg1.classList.toggle('active');
  formSection.classList.remove('active');
  pg2.classList.remove('active');
  contactSection.classList.remove('active');
  pg3.classList.remove('active');
});

document.querySelector('#pg2').addEventListener('click', (e) => {
  e.preventDefault();
  titleDisplay.textContent = 'Add a new book';
  formSection.classList.toggle('active');
  pg2.classList.toggle('active');
  list.classList.remove('active');
  pg1.classList.remove('active');
  contactSection.classList.remove('active');
  pg3.classList.remove('active');
});

document.querySelector('#pg3').addEventListener('click', (e) => {
  e.preventDefault();
  titleDisplay.textContent = 'Contact Information';
  contactSection.classList.toggle('active');
  pg3.classList.toggle('active');
  list.classList.remove('active');
  pg1.classList.remove('active');
  formSection.classList.remove('active');
  pg2.classList.remove('active');
});

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
    const bookData = document.createElement('div');
    const bookTitle = document.createElement('p');
    const bookAuthor = document.createElement('p');
    const removeBtn = document.createElement('button');
    bookData.className = 'book-delete';
    list.appendChild(bookData);

    bookTitle.classList.add('book-title');
    bookAuthor.classList.add('book-author');
    removeBtn.classList.add('remove-btn');
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

    document.getElementById(btId).textContent = `"${book.title}"`;
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
    alert('please fill in all empty fields');
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

// Clock

function currentTime() {
  const date = new Date();
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();
  let session = 'AM';

  if (hh === 0) {
    hh = 12;
  }
  if (hh > 12) {
    hh -= 12;
    session = 'PM';
  }

  hh = hh < 10 ? `0${hh}` : hh;
  mm = mm < 10 ? `0${mm}` : mm;
  ss = ss < 10 ? `0${ss}` : ss;

  const time = `${hh}:${mm}+${ss} ${session}`;

  document.getElementById('clock').innerText = `29/06/2022, ${time}`;
  const t = setTimeout(() => {
    currentTime();
  }, 1000);
  module.exports = t;
}
currentTime();
