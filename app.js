const title = document.querySelector('.title-book');
const author = document.querySelector('.author-name');
const NbookData = [];
let i = 0;

/* add new book */

function newBook() {
  const deck = document.getElementById('books-container');
  const bookData = document.createElement('div');
  const bookTitle = document.createElement('p');
  const bookAuthor = document.createElement('p');
  const removeBtn = document.createElement('button');
  const line = document.createElement('div');
  bookData.className = 'book';
  deck.appendChild(bookData);

  bookTitle.classList.add('book-title');
  bookAuthor.classList.add('book-author');
  removeBtn.classList.add('remove-btn');
  line.classList.add('line');

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

  document.getElementById(btId).textContent = title.value;
  document.getElementById(baId).textContent = author.value;
  document.getElementById(rbId).textContent = 'Remove';

  removeBtn.addEventListener('click', () => {
    bookData.remove();
  });
}

/* save into local storage */
const addUserData = () => {
  let savedData = localStorage.getItem('BookData');
  savedData = JSON.parse(savedData);
  const dataUserObject = {
    name: author.value,
    title: title.value,
  };
  if (savedData !== null) {
    savedData.push(dataUserObject);
    localStorage.setItem('BookData', JSON.stringify(savedData));
  } else {
    NbookData.push(dataUserObject);
    localStorage.setItem('BookData', JSON.stringify(NbookData));
  }
};

/* button form */
const addNewBook = document.querySelector('.add-btn');
addNewBook.addEventListener('click', () => {
  newBook();
  addUserData();
});

/* display data */

function getUserData() {
  let data = localStorage.getItem('BookData');
  data = JSON.parse(data);
  if (data !== null) {
    for (let j = 0; j < data.length; j += 1) {
      const deck = document.getElementById('books-container');
      const bookData = document.createElement('div');
      const bookTitle = document.createElement('p');
      const bookAuthor = document.createElement('p');
      const removeBtn = document.createElement('button');
      const line = document.createElement('div');
      const booksaved = data[j].title;
      bookData.className = 'book';
      deck.appendChild(bookData);

      bookTitle.classList.add('book-title');
      bookAuthor.classList.add('book-author');
      removeBtn.classList.add('remove-btn');
      line.classList.add('line');

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

      document.getElementById(btId).textContent = data[j].title;
      document.getElementById(baId).textContent = data[j].name;
      document.getElementById(rbId).textContent = 'Remove';

      removeBtn.addEventListener('click', () => {
        bookData.remove();
        for (let k = 0; k < data.length; k += 1) {
          if (booksaved === data[k].title) {
            data.splice(k, 1);
            localStorage.setItem('BookData', JSON.stringify(data));
          }
        }
      });
    }
  }
}
getUserData();
