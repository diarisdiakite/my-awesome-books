import { myBookList } from '../classes/bookCollectionClass.js';
import { displaylist } from './displayBooks.js';

const formTitle = document.getElementById('title');
const formAuthor = document.getElementById('author');

const addBook = (title, author) => {
  const book = {
    id: myBookList.books.length + 1,
    title,
    author,
  };
  myBookList.books.push(book);
  myBookList.saveBooksToStorage(); // Save the updated book list to localStorage
};

const addEventFunction = (e) => {
  e.preventDefault();
  const error = 'Please provide a title and an author for the Book';
  if (formTitle.value !== '' && formAuthor.value !== '') {
    addBook(formTitle.value, formAuthor.value);
    formTitle.value = '';
    formAuthor.value = '';
    displaylist();
    window.location.reload();
  }
  return error;
};

export default addEventFunction;
