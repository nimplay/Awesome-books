const deck = document.querySelector('books-container');
const bookData = document.createElement('div');
bookData.classList.add('book');
deck.appendChild(bookData)

function newBook() {
    let i = 0;
    const bookTitle = document.createElement('p');
    const bookAuthor = document.createElement('p');
    const removeBtn = document.createElement('button');
    const line = document.createElement('div');

    bookTitle.classList.add('book-title');
    bookAuthor.classList.add('book-author');
    removeBtn.classList.add('remove-btn')
    line.classList.add('line');

    bookTitle.setAttribute('id', `bt${i}`);
    bookAuthor.setAttribute('id', `ba${i}`);
    removeBtn.setAttribute('id', `rb${i}`);

    const btId = bookTitle.getAttribute('id');
    const baId = bookAuthor.getAttribute('id');
    const rbId = removeBtn.getAttribute('id');

    bookData.appendChild(bookTitle);
    bookData.appendChild(bookAuthor);
    bookData.appendChild(removeBtn);
    bookData.appendChild(line);

    document.getElementById('btId').textContent = 'Pepito preguntó'
}

newBook();

