import Book from './modules/classes/bookClass.js';
import BookCollection from './modules/classes/bookCollectionClass.js';
import navItems from './modules/globalElements/lists/list_navItems.js';
import { displaylist, removeButtons } from './modules/eventFunctions/displayBooks.js';
import {
  navAdd, navList, navContact, myNavBar, navListEventFunction, navAddEventFunction, navContactEventFunction,
} from './modules/globalElements/navbar.js';
import addEventFunction from './modules/eventFunctions/addBook.js';
//import attachRemoveButtonListener from './modules/eventFunctions/removeBook.js';
import footerText from './modules/globalElements/footer.js';
import updateDate from './modules/globalElements/date.js';

export { Book, BookCollection, navItems, displaylist, myNavBar };

const addButton = document.querySelector('#addBook');
addButton.addEventListener('click', addEventFunction);

/* removeButtons.forEach((button) => {
  const bookId = button.dataset.id;
  attachRemoveButtonListener(button, bookId);
  localStorage.removeItem(bookId)
});
 */
// myNavBar;
navList.addEventListener('click', navListEventFunction);
navAdd.addEventListener('click', navAddEventFunction);
navContact.addEventListener('click', navContactEventFunction);


const currentDateTime = document.getElementById('luxon-date');
updateDate(currentDateTime);

// footer
const myFooter = document.getElementById('footer-section');
myFooter.innerHTML += footerText;
