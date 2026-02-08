const btn = document.querySelector('.lang-btn');
const dropdown = document.querySelector('.lang-dropdown');

btn.addEventListener('click', () => {
  const isExpanded = btn.getAttribute('aria-expanded') === 'true';
  btn.setAttribute('aria-expanded', !isExpanded);
  dropdown.classList.toggle('active');
});

// Chiude il menu se si clicca fuori
window.addEventListener('click', (e) => {
  if (!btn.contains(e.target)) {
    dropdown.classList.remove('active');
    btn.setAttribute('aria-expanded', 'false');
  }
});
