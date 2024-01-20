//Initie les animations AOS
document.addEventListener("DOMContentLoaded", function () {
    AOS.init({
        duration: 1000,
        once: true,
    });
});

// Animation des phrases qui s'écrivent et s'effacent 
var i = 0;
var phrases = [
  'Je suis un Geek.',
  'Je suis un Développeur.',
  'Je suis un passionné.',
  'Je suis tout simplement moi.'
];
var currentPhraseIndex = 0;
var speed = 50;
var eraseSpeed = 80;
var pauseBetweenPhrases = 2000;
var demoElement = document.getElementById("demo");
var typedTextElement = document.getElementById("typed-text");

function typeWriter() {
  if (i < phrases[currentPhraseIndex].length) {
    typedTextElement.textContent += phrases[currentPhraseIndex].charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  } else if (i === phrases[currentPhraseIndex].length) {
    // Commencez l'effacement
    setTimeout(eraseText, pauseBetweenPhrases);
  }
}

function eraseText() {
  if (typedTextElement.textContent.length > 0) {
    typedTextElement.textContent = typedTextElement.textContent.slice(0, -1);
    setTimeout(eraseText, eraseSpeed);
  } else {
    setTimeout(() => {
      currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
      i = 0;
      typeWriter();
    }, pauseBetweenPhrases);
  }

}

setTimeout(typeWriter, 1000);

// Animation du decalage a gauche de la phrase d'acceuil
const mastheadFrame = document.querySelector(".masthead-frame");

const delay = 2500;

setTimeout(function() {
  mastheadFrame.classList.add("decalage-a-gauche");
}, delay);


// Animation fleche emmène à la page section (partie footer)
document.getElementById("continue-footer-up").addEventListener("click", function(event) {
    event.preventDefault();

    const socialLinksSection = document.getElementById("menu");
    socialLinksSection.scrollIntoView({ behavior: "smooth" });
});

// Animation fleche emmène à la page "Social Links" section
document.getElementById("continue-link").addEventListener("click", function(event) {
    event.preventDefault();

    const socialLinksSection = document.getElementById("social-links");
    socialLinksSection.scrollIntoView({ behavior: "smooth" });
});








