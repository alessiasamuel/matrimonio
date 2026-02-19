// GESTIONE LINGUE
const btn = document.querySelectorAll('.lang-btn');
btn.forEach(button => {
button.addEventListener('click', () => {
  // Rimuovi active da tutti
  console.log(localStorage.getItem("language"));

  const allLang = document.querySelector('.lang-btn.active');//.classList.remove('active');
  console.log("Numero di elementi trovati:", allLang.length);
  // Aggiungi active a quello cliccato
  button.classList.add('active'); 
 
  // Qui andrebbe la logica per cambiare lingua
  const lang = button.getAttribute('data-lang');
  // Esempio: window.location.href = '/' + lang;
  localStorage.setItem("language", lang);
  console.log("Lingua cambiata in questo momento: " + localStorage.getItem("language"));

  document.getElementById("menu-it").style.display = lang === "it" ? "flex" : "none";
  document.getElementById("menu-en").style.display = lang === "en" ? "flex" : "none";
  document.getElementById("menu-zen").style.display = lang === "zen" ? "flex" : "none";

  document.getElementById("footer-it").style.display = lang === "it" ? "flex" : "none";
  document.getElementById("footer-en").style.display = lang === "en" ? "flex" : "none";
  document.getElementById("footer-zen").style.display = lang === "zen" ? "flex" : "none";

  document.getElementById("regalo-it").style.display = lang === "it" ? "flex" : "none";
  document.getElementById("regalo-en").style.display = lang === "en" ? "flex" : "none";
  document.getElementById("regalo-zen").style.display = lang === "zen" ? "flex" : "none";

  document.getElementById("timeline-it").style.display = lang === "it" ? "flex" : "none";
  document.getElementById("timeline-en").style.display = lang === "en" ? "flex" : "none";
  document.getElementById("timeline-zen").style.display = lang === "zen" ? "flex" : "none";

  document.getElementById("rsvp-it").style.display = lang === "it" ? "flex" : "none";
  document.getElementById("rsvp-en").style.display = lang === "en" ? "flex" : "none";
  document.getElementById("rsvp-zen").style.display = lang === "zen" ? "flex" : "none";

});

});

// GESTIONE MENU BOTTONI
const menu_div = document.querySelectorAll('.menu-btn');

menu_div.forEach(divbutton => {
  divbutton.addEventListener('mouseup', () => {  
  
  const lang = localStorage.getItem("language");
  console.log("#lang-"+lang);

  document.querySelector('.lang-btn.active').classList.remove('active');
  // Aggiungi active a quello cliccato

  const button = document.querySelector("#lang-"+lang);
  button.classList.add('active'); 

  console.log(button.id);
  //document.getElementById("lang-en").classList.add(lang === 'en' ? 'active' : '');
  //document.getElementById("lang-zen").classList.add(lang === 'zen' ? 'active' : '');

  });

  divbutton.addEventListener('mousedown', () => {   
    console.log('aiutooo'); 
    console.log(divbutton.id); 
    window.location.href = divbutton.id + ".html";
  });

});

// RSVP
const scriptURL = "https://script.google.com/macros/s/AKfycbwxzgPnV9JNrN535OqHqp3sWwcdcd8On1bMrbY8ZQzHzdcAAtUuGRhQvw9BiPubCVVM/exec";

document.getElementById("rsvpForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const formData = {
        nome: this.nome.value,
        email: this.email.value,
        presenza: this.presenza.value,
        accompagnatori: this.accompagnatori.value,
        note: this.note.value
    };

    fetch(scriptURL, {
        method: "POST",
        body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(() => {
        document.getElementById("rsvpMessage").innerHTML =
            "Grazie! La tua conferma è stata registrata.";
        document.getElementById("rsvpForm").reset();
    })
    .catch(err => {
        document.getElementById("rsvpMessage").innerHTML =
            "Si è verificato un errore. Riprova più tardi.";
    });
});

