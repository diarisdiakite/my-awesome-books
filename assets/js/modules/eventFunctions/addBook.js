import { BookCollection, myBookList, books } from "../classes/bookCollectionClass.js";
import { displaylist } from "./displayBooks.js";

const formTitle = document.getElementById('title');
const formAuthor = document.getElementById('author');

export let addEventfunction = (e) => {
  e.preventDefault();
  myBookList.addBook(formTitle.value, formAuthor.value);
  formTitle.value = '';
  formAuthor.value = '';
  displaylist();
};

