const card1 = document.getElementById("card1");
const card2 = document.getElementById("card2");
const card3 = document.getElementById("card3");
const card4 = document.getElementById("card4");

const revealBtn = document.getElementById("revealBtn");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const tryAgainBtn = document.getElementById("tryAgainBtn");
const card3Eyebrow = document.getElementById("card3Eyebrow");
const card3Title = document.getElementById("card3Title");
const card3Message = document.getElementById("card3Message");

const bg = document.getElementById("background-confetti");

const cards = [card1, card2, card3, card4];

const CONFETTI_CLEANUP_DELAY = 8000;
const CONFETTI_COLORS = ["#38bdf8", "#a78bfa", "#f97316", "#fde047", "#34d399"];
const card3Presets = {
  candles: {
    eyebrow: "Candlelight moment",
    title: "Make a wish",
    message: "Close your eyes, take a deep breath, and soak in all the love.",
    button: "Release the confetti",
  },
  message: {
    eyebrow: "From my heart",
    title: "You are our hero",
    message:
      "Thank you for every sacrifice, every laugh, and every lesson. We love you endlessly.",
    button: "Continue the celebration",
  },
};

function showCard(card) {
  cards.forEach((item) => item.classList.remove("active"));
  requestAnimationFrame(() => card.classList.add("active"));
}

function updateCard3Content(preset) {
  card3Eyebrow.textContent = preset.eyebrow;
  card3Title.textContent = preset.title;
  card3Message.textContent = preset.message;
  tryAgainBtn.textContent = preset.button;
}

function handleCandlesClick() {
  updateCard3Content(card3Presets.candles);
  showCard(card3);
}

function handleMessageClick() {
  updateCard3Content(card3Presets.message);
  showCard(card3);
}

revealBtn.onclick = () => {
  showCard(card2);
};

yesBtn.onclick = handleCandlesClick;
noBtn.onclick = handleMessageClick;
tryAgainBtn.onclick = () => showCard(card4);

/* Continuous flower confetti */
setInterval(() => {
  const c = document.createElement("div");
  c.className = "confetti";
  if (Math.random() > 0.7) c.classList.add("heart");

  const color = CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)];
  c.style.background = color;
  c.style.boxShadow = `0 0 16px ${color}88`;
  c.style.left = Math.random() * 100 + "vw";
  c.style.animationDuration = 4 + Math.random() * 4 + "s";
  bg.appendChild(c);

  setTimeout(() => c.remove(), CONFETTI_CLEANUP_DELAY);
}, 180);