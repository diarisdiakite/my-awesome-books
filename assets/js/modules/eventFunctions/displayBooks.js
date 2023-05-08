import { myBookList, books } from '../classes/bookCollectionClass.js';
// import { removeButtonEventFunction } from "./removeBook.js";

const displayAllBooks = document.querySelector('#list');

export const displaylist = () => {
  books.forEach((book) => {
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
      myBookList.removeBook(id);
      const bookEl = document.getElementById(`data-${book.id}`);
      displayAllBooks.removeChild(bookEl);
      // window.location.reload();
    });

    bookCard.appendChild(removeButton);
    displayAllBooks.appendChild(bookCard);
    bookCard.classList.add('book-stack');
  });
};
/* */
export const removeButtons = document.querySelectorAll('.my-button-container');
