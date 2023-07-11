import { books, myBookList } from '../classes/bookCollectionClass.js';

const removeBook = (id) => {
  const updatedBooks = books.filter((book) => book.id !== parseInt(id, 10));
  myBookList.books = updatedBooks;
  myBookList.saveBooksToStorage('BookData', JSON.stringify(updatedBooks));
  window.location.reload();
};

export default removeBook;