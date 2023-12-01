import './contact.scss';

export function buildContactPage() {
  document.querySelector('#content').innerHTML = /* html */ `
    <h1 class="contact-header">Contact Us</h1>
    <p class="contact-icon">☎️</p>
    <p class="contact-text">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa eveniet
      quo distinctio, nihil alias similique facilis tempora blanditiis
      inventore voluptas eius mollitia dolore atque quia beatae, doloremque,
      accusamus dolorem assumenda?
    </p>
  `;
}
