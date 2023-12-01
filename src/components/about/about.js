import './about.scss';
import restaurantImage from './restaurant.jpg';

export function buildAboutPage() {
  document.querySelector('#content').innerHTML = /* html */ `
    <h1 class="about-header">Fake Restaurante</h1>
    <img class="about-img" src=${restaurantImage} />
    <p class="about-text">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa eveniet
      quo distinctio, nihil alias similique facilis tempora blanditiis
      inventore voluptas eius mollitia dolore atque quia beatae, doloremque,
      accusamus dolorem assumenda?
    </p>
  `;
}
