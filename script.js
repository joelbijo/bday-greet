//Play bday song on window load
window.addEventListener("load", function () {
  const song = document.getElementById("bdaySong");
  song.play().catch((err) => {
    console.log("Autoplay stopped.");
  });
});

//Blow out candle
const blow = document.getElementById("blowCandleBtn");
const flame = document.getElementById("candle-flame");
blow.addEventListener("click", function () {
  flame.classList.add("hidden");
  blow.textContent = "Make a wish! ✨";
  blow.disabled = true;
  blow.style.opacity = "0.6";
  blow.style.cursor = "not-allowed";
});

//Card
const openCard = document.getElementById("openCardBtn");
const greetingCard = document.getElementById("greeting-card");
const closeCard = document.getElementById("closeCardBtn");
openCard.addEventListener("click", function () {
  greetingCard.classList.add("show");
});

closeCard.addEventListener("click", function () {
  greetingCard.classList.remove("show");
});
