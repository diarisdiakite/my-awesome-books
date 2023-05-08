import Book from './modules/classes/bookClass.js';
import BookCollection from './modules/classes/bookCollectionClass.js';
import navItems from './modules/globalElements/lists/list_navItems.js';
import { displaylist, removeButtons } from './modules/eventFunctions/displayBooks.js';
import {
  myNavBar, navListEventFunction, navAddEventFunction, navContactEventFunction,
} from './modules/globalElements/navbar.js';
import addEventFunction from './modules/eventFunctions/addBook.js';
import attachRemoveButtonListener from './modules/eventFunctions/removeBook.js';
import footerText from './modules/globalElements/footer.js';
import updateDate from './modules/globalElements/date.js';

export { Book };
export { BookCollection };
export { navItems };
export { displaylist };
export { myNavBar };

const addButton = document.querySelector('#addBook');
addButton.addEventListener('click', addEventFunction);

removeButtons.forEach((button) => {
  const bookId = button.dataset.id;
  attachRemoveButtonListener(button, bookId);
});

// myNavBar;
const navList = document.getElementById('display-list');
const navAdd = document.getElementById('display-add');
const navContact = document.getElementById('display-contact');
navList.addEventListener('click', navListEventFunction);
navAdd.addEventListener('click', navAddEventFunction);
navContact.addEventListener('click', navContactEventFunction);

const currentDateTime = document.getElementById('luxon-date');
updateDate(currentDateTime);

// footer
const myFooter = document.getElementById('footer-section');
myFooter.innerHTML += footerText;
