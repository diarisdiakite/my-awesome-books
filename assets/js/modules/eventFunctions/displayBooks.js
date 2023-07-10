//import Book from '../classes/bookClass.js';
import { books } from '../classes/bookCollectionClass.js';
import removeBook from './removeBook.js';


const displayAllBooks = document.querySelector('#list');

export const displaylist = () => {
  books.forEach((book) => {
    console.log('Books:', books);
    const bookCard = document.createElement('li');
    const removeButton = document.createElement('button');
    removeButton.classList.add('my-button-container');

    bookCard.innerHTML += `    
      <p class="my-title-container">'${book.title}' by ${book.author}</p>
    `;
    bookCard.id = `data-${book.id}`;
    removeButton.textContent = 'Remove';
    removeButton.dataset.id = book.id;

    removeButton.addEventListener('click', (e) => {
      const { id } = e.target.dataset;
      removeBook(id);
      const bookEl = document.getElementById(`data-${book.id}`);
      //const bookEl = document.getElementById(`book-${id}`);
      displayAllBooks.removeChild(bookEl); 
    });
    bookCard.appendChild(removeButton);
    displayAllBooks.appendChild(bookCard);
    bookCard.classList.add('book-stack');
  });
  
};
displaylist();

export const removeButtons = document.querySelectorAll('.my-button-container');
