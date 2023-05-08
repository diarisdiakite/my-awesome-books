import { myBookList } from '../classes/bookCollectionClass.js';

const displayAllBooks = document.querySelector('#list');

const attachRemoveButtonListener = (removeButton, bookId) => {
  removeButton.addEventListener('click', () => {
    myBookList.removeBook(bookId);
    const bookEl = document.getElementById(`data-${bookId}`);
    displayAllBooks.removeChild(bookEl);
  });
};

export default attachRemoveButtonListener;