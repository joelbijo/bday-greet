//Blow out candle
const blow = document.getElementById("blowCandleBtn");
const flame = document.getElementById("candle-flame");
blow.addEventListener("click", function () {
  flame.classList.add("hidden");
  blow.textContent = "Make a wish! ";
  blow.disabled = true;
  blow.style.opacity = "0.6";
  blow.style.cursor = "not-allowed";
});
