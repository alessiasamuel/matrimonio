const btn = document.querySelectorAll('.lang-btn');

btn.forEach(button => {
button.addEventListener('click', () => {
  // Rimuovi active da tutti
  document.querySelector('.lang-btn.active').classList.remove('active');
  // Aggiungi active a quello cliccato
  button.classList.add('active');
  
  // Qui andrebbe la logica per cambiare lingua
  const lang = button.getAttribute('data-lang');
  document.getElementById("menu-it").style.display = lang === "it" ? "flex" : "none";
  document.getElementById("menu-en").style.display = lang === "en" ? "flex" : "none";
  document.getElementById("footer-it").style.display = lang === "it" ? "flex" : "none";
  document.getElementById("footer-en").style.display = lang === "en" ? "flex" : "none";
  console.log("Lingua cambiata in: " + lang);
  // Esempio: window.location.href = '/' + lang;
});

