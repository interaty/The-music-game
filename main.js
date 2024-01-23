const playSound = (e) => {
const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

if(!audio) return; // zastaví funkci v moment, kdy na základě stlačeného tlačítka neexistuje přidělený sound
audio.currentTime = 0; // zresetuje časoběh audia, aby šlo opakovaně stlačit a okamžitě přehrát zvuk od začátku
audio.play();
key.classList.add("playing");
}

function soundEnd(e) {
  this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");

for(const key of keys) {
  key.addEventListener("transitionend", soundEnd);
}

window.addEventListener("keydown", playSound);

