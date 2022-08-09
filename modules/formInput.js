import Book from './classBook.js';
import DisplayBook from './classDisplayBook.js';

const form = document.querySelector('#form');

export default form.addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.querySelector('#book-name').value;
  const author = document.querySelector('#author-name').value;

  if (title !== '' && author !== '') {
    const newBook = new Book(title, author);
    DisplayBook.addBook(newBook);

    DisplayBook.setLs(newBook);

    document.querySelector('#book-name').value = '';
    document.querySelector('#author-name').value = '';

    document.querySelector('#book-name').focus();
  }

  const deleteBtn = document.querySelectorAll('.delete');
  deleteBtn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const index = e.target.dataset.remove;
      DisplayBook.deleteBook(index);
      e.target.parentElement.remove();
    });
  });
});

DisplayBook.getLs();