import Book from './bookClass.js';

export default class BookCollection {
  constructor(name) {
    this.books = [];
    this.id = this.books.length + 1;
    this.name = name;
    this.loadBooksFromStorage();
  }

  getBooksByAuthor(author) {
    return this.books.filter((book) => book.author === author);
  }

  /* displayBooks() {
    return this.books;
  } */

  loadBooksFromStorage() {
    const savedBooks = localStorage.getItem(this.name);
    if (savedBooks) {
      this.books = JSON.parse(savedBooks).map((book) => new Book(book.title, book.author, book.id)); //Check this afterwards
    }
    return this.books;
  }

  saveBooksToStorage() {
    localStorage.setItem(this.name, JSON.stringify(this.books));
  }
}

export const myBookList = new BookCollection('BookData');
export const books = myBookList.loadBooksFromStorage() || [];