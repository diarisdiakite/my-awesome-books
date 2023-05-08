import { myBookList } from "../classes/bookCollectionClass.js";
import { Book } from "../classes/bookClass.js";

const displayAllBooks = document.querySelector('#list');
let book = new Book();

    
export const attachRemoveButtonListener = (removeButton, bookId) => {
  removeButton.addEventListener('click', () => {
    myBookList.removeBook(bookId);
    const bookEl = document.getElementById(`data-${bookId}`);
    displayAllBooks.removeChild(bookEl);
  });
};


