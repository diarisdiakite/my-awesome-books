import { navItems } from "./lists/list_navItems.js";

export let myNavBar = navItems.forEach((navItem) => {
document.getElementById('navList').innerHTML += `
  <li class="nav-item">
    <a class="nav-link" id="${navItem.id}" href="#">${navItem.name}</a>
  </li> 
`
})

const addSection = document.querySelector('.div');
const contactSection = document.querySelector('.contact-section');
const listSection = document.querySelector('.book-container');
const date = document.querySelector('#date');

export const navListEventFunction = () => {
//navList.addEventListener('click', () => {
  addSection.style.display = 'none';
  contactSection.classList.add('hide');
  listSection.classList.remove('hide');
//});
}

export const navAddEventFunction = () => {
//addNav.addEventListener('click', () => {
  listSection.classList.add('hide');
  contactSection.classList.add('hide');
  addSection.style.display = 'flex';
//});
}

export const navContactEventFunction = () => {
//contactNav.addEventListener('click', () => {
  listSection.classList.add('hide');
  contactSection.classList.remove('hide');
  addSection.style.display = 'none';
//});
}