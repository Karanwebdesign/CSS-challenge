const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.textContent = isOpen ? '×' : '☰';
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.textContent = '☰';
    });
  });
}

const demoButton = document.querySelector('#demoButton');
const demoMessage = document.querySelector('#demoMessage');

if (demoButton && demoMessage) {
  demoButton.addEventListener('click', () => {
    demoMessage.textContent = 'Nice! The button interaction is working.';
    demoButton.innerHTML = 'Interaction complete <span aria-hidden="true">✓</span>';
    demoButton.classList.add('is-complete');
    window.setTimeout(() => {
      demoMessage.textContent = 'Go ahead—give it a try.';
      demoButton.innerHTML = 'Try the interaction <span aria-hidden="true">↗</span>';
      demoButton.classList.remove('is-complete');
    }, 2200);
  });
}
