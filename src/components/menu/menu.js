import './menu.scss';

export function buildMenuPage() {
  document.querySelector('#content').innerHTML = /* html */ `
    <h1 class="menu-header">Our Menu</h1>
    <ul class="menu-list">
      <li>Water: $20</li>
      <li>Taco: $1/ea</li>
      <li>A Deep-Fried Whale: $9</li>
      <li>"Child Size" Soda: $0.01</li>
    </ul>
  `;
}
