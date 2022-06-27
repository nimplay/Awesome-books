const title = document.querySelector('.title-book');
const name = document.querySelector('.author-name');
const bookData = [];
let i = 0;

function newBook() {
  const deck = document.getElementById('books-container');
  const bookData = document.createElement('div');
  bookData.className = 'book';
  deck.appendChild(bookData);
  const bookTitle = document.createElement('p');
  const bookAuthor = document.createElement('p');
  const removeBtn = document.createElement('button');
  const line = document.createElement('div');

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
  document.getElementById(baId).textContent = name.value;
  document.getElementById(rbId).textContent = 'Remove';
}

/* local storage */
const addUserData = () => {
  const dataUserObject = {
    name: name.value,
    title: title.value,
  };
  bookData.push(dataUserObject);
  localStorage.setItem('BookData', JSON.stringify(bookData));
};

/* button form */
const addNewBook = document.querySelector('.add-btn');
addNewBook.addEventListener('click', () => {
  newBook();
  addUserData();
});
