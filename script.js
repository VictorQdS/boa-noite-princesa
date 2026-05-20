const button = document.querySelector("#loveButton");
const secretMessage = document.querySelector("#secretMessage");
const music = document.querySelector("#backgroundMusic");
const musicButton = document.querySelector("#musicButton");

const heartSymbols = ["\u2665", "\u2661", "\u2764"];

music.volume = 0.32;

function createHeart() {
  const heart = document.createElement("span");
  const size = Math.floor(Math.random() * 18) + 18;

  heart.className = "heart";
  heart.textContent = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
  heart.style.setProperty("--x", `${Math.random() * 100}vw`);
  heart.style.setProperty("--size", `${size}px`);

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 2800);
}

button.addEventListener("click", () => {
  secretMessage.classList.toggle("show");
  button.textContent = secretMessage.classList.contains("show")
    ? "Mais carinho"
    : "Abrir carinho";

  for (let index = 0; index < 14; index += 1) {
    setTimeout(createHeart, index * 85);
  }
});

musicButton.addEventListener("click", async () => {
  if (music.paused) {
    try {
      await music.play();
      musicButton.textContent = "Pausar musica";
      musicButton.classList.add("playing");
    } catch (error) {
      musicButton.textContent = "Libera os direitos autoraias Camilla😭";
    }
    return;
  }

  music.pause();
  musicButton.textContent = "Tocar musica";
  musicButton.classList.remove("playing");
});
