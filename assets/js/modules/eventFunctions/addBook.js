import { myBookList } from '../classes/bookCollectionClass.js';
import { displaylist } from './displayBooks.js';

const formTitle = document.getElementById('title');
const formAuthor = document.getElementById('author');

const addEventFunction = (e) => {
  e.preventDefault();
  myBookList.addBook(formTitle.value, formAuthor.value);
  formTitle.value = '';
  formAuthor.value = '';
  displaylist();
};

export default addEventFunction;
