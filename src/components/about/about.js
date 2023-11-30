import './about.scss';
import restaurantImage from './restaurant.jpg';

export function buildAboutPage() {
  document.querySelector('#content').innerHTML = /* html */ `
    <h1>Fake Restaurante</h1>
    <img src=${restaurantImage} />
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa eveniet
      quo distinctio, nihil alias similique facilis tempora blanditiis
      inventore voluptas eius mollitia dolore atque quia beatae, doloremque,
      accusamus dolorem assumenda?
    </p>
  `;
}
