import navItems from './lists/list_navItems.js';

export const myNavBar = navItems.forEach((navItem) => {
  document.getElementById('navList').innerHTML += `
  <li class="nav-item">
    <a class="nav-link" id="${navItem.id}" href="#">${navItem.name}</a>
  </li> 
`;
});

export const navList = document.getElementById('display-list');
export const navAdd = document.getElementById('display-add');
export const navContact = document.getElementById('display-contact');
const addSection = document.querySelector('.div');
const contactSection = document.querySelector('.contact-section');
const listSection = document.querySelector('.book-container');
// const date = document.querySelector('#date');

export const navListEventFunction = () => {
  navList.style.color = '#0000ff';
  navAdd.style.color = '#000';
  navContact.style.color = '#000';
  listSection.style.display = 'block';
  addSection.style.display = 'none';
  contactSection.style.display = 'none';
};

export const navAddEventFunction = () => {
  navAdd.style.color = '#0000ff';
  navList.style.color = '#000';
  navContact.style.color = '#000';
  listSection.style.display = 'none';
  addSection.style.display = 'flex';
  contactSection.style.display = 'none';
};

export const navContactEventFunction = () => {
  navContact.style.color = '#0000ff';
  navAdd.style.color = '#000';
  navList.style.color = '#000';
  listSection.style.display = 'none';
  addSection.style.display = 'none';
  contactSection.style.display = 'flex';
};