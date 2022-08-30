import './modules/formInput.js';

import { DateTime } from './modules/luxon.js';

const listBtn = document.querySelector('#list');
const addBookBtn = document.querySelector('#add-new');
const contactBtn = document.querySelector('#contact');

const contact = document.querySelector('.contact');
const bookList = document.querySelector('.shelve');
const addNewBook = document.querySelector('.form');

listBtn.addEventListener('click', (e) => {
  e.preventDefault();
  bookList.classList.remove('hide');
  contact.classList.add('hide');
  addNewBook.classList.add('hide');
});

addBookBtn.addEventListener('click', (e) => {
  e.preventDefault();
  addNewBook.classList.remove('hide');
  contact.classList.add('hide');
  bookList.classList.add('hide');
});

contactBtn.addEventListener('click', (e) => {
  e.preventDefault();
  contact.classList.remove('hide');
  bookList.classList.add('hide');
  addNewBook.classList.add('hide');
});

const now = DateTime.now().toLocaleString(DateTime.DATETIME_HUGE);
document.getElementById('dateAndtime').innerHTML = now;

const scrollToTop = document.querySelector('.scroll-to-top');
window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    scrollToTop.classList.add('fade');
  } else {
    scrollToTop.classList.remove('fade');
  }
});

