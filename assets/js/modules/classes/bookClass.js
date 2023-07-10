export default class Book {
  constructor(title, author, id) {
    this.title = title;
    this.author = author;
    this.id = id;
  }

  displayTitleByAuthor() {
    return `${this.id}, ${this.title} by ${this.author}`;
  }
}