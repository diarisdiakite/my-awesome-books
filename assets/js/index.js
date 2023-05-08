import { navListEventFunction, navAddEventFunction, navContactEventFunction} from './modules/globalElements/navbar.js';
import { Book } from './modules/classes/bookClass.js';
export { Book };
import { BookCollection } from './modules/classes/bookCollectionClass.js';
import { addEventfunction } from './modules/eventFunctions/addBook.js';
import { displaylist, removeButtons } from './modules/eventFunctions/displayBooks.js';


// Create a new Book Collection
const myBookList = new BookCollection('Awesome books');


//myBookList.addBook();
const addButton = document.querySelector('#addBook');
addButton.addEventListener('click', addEventfunction);

removeButtons.forEach(button => {
  const bookId = button.dataset.id;
  attachRemoveButtonListener(button, bookId);
});

//use myNavBar;
const navList = document.getElementById('display-list');
const navAdd = document.getElementById('display-add');
const navContact = document.getElementById('display-contact');
navList.addEventListener('click', navListEventFunction);
navAdd.addEventListener('click', navAddEventFunction);
navContact.addEventListener('click', navContactEventFunction);

  //Add inheritance

  //Add prototype???


//ADD ALL DOM ELEMENTS HERE

