/* ===== LUXURY LOVE EFFECT ===== */

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");

  const symbols = ["❤","💗","💖","💘","💞"];
  heart.innerHTML = symbols[Math.floor(Math.random() * symbols.length)];

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (18 + Math.random() * 25) + "px";
  heart.style.animationDuration = (4 + Math.random() * 4) + "s";
  heart.style.opacity = Math.random();

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 8000);
}

/* spawn lebih banyak */
setInterval(createHeart, 400);