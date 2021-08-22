const playSound = (e) => {
  const audio = this.document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = this.document.querySelector(`.key[data-key="${e.keyCode}"]`);
  audio.play();
  key.classList.add("playing");
}

window.addEventListener("keydown", playSound);