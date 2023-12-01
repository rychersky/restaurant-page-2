import './main.scss';
import { buildAboutPage } from './components/about/about';
import { buildContactPage } from './components/contact/contact';
import { buildMenuPage } from './components/menu/menu';

buildAboutPage();

document.querySelector('.about-button').addEventListener('click', () => {
  buildAboutPage();
});

document.querySelector('.contact-button').addEventListener('click', () => {
  buildContactPage();
});

document.querySelector('.menu-button').addEventListener('click', () => {
  buildMenuPage();
});
