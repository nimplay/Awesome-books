class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}
class UI {
  static displayBooks() {
    const StoredBooks = [
      {
        title: 'hello',
        author: 'pepe'
      },
      {
        title: 'bye',
        author: 'maria'
      },
    ];
    const books = StoredBooks;

    books.forEach((book) => UI.addBookToList(book));
  }

}



const addNewBook = document.querySelector('.add-btn');
addNewBook.addEventListener('click', (e) => {
  e.preventDefault();
  const title = document.querySelector('#title-book').value;
  const author = document.querySelector('#author-name').value;

  const book = new Book(title, author);
});
