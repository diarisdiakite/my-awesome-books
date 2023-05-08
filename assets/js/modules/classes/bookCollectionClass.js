import Book from './bookClass.js';

export default class BookCollection {
  constructor(name) {
    this.books = [];
    this.id = this.books.length + 1;
    this.name = name;
    this.loadBooksFromStorage();
  }

  addBook(title, author) {
    const error = 'Please provide a title and an author for the Book';
    if (title !== '' && author !== '') {
      const book = new Book(
        // id,
        title,
        author,
      );
      this.books.unshift(book);
      this.saveBooksToStorage();
      return this.books;
    }
    return error;
  }

  removeBook(id) {
    this.books = this.books.filter((book) => book.id !== parseInt(id, 10));
    this.saveBooksToStorage();
    return this.books;
  }

  getBooksByAuthor(author) {
    return this.books.filter((book) => book.author === author);
  }

  displayBooks() {
    return this.books;
  }

  loadBooksFromStorage() {
    const savedBooks = localStorage.getItem(this.name);
    if (savedBooks) {
      this.books = JSON.parse(savedBooks).map((book) => new Book(book.title, book.author, book.id));
    }
    return this.books;
  }

  saveBooksToStorage() {
    localStorage.setItem(this.name, JSON.stringify(this.books));
  }
}

export const myBookList = new BookCollection('My Book Collection');
export const books = myBookList.loadBooksFromStorage() || [];