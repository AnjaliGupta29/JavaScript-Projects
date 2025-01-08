// GSAP Animations
gsap.from(".title", { duration: 1, y: -50, opacity: 0, ease: "bounce" });
gsap.from(".counter-box", { duration: 1, scale: 0.8, opacity: 0, ease: "elastic" });
gsap.from(".reset-btn", { duration: 1.5, scale: 0.8, opacity: 0, ease: "elastic" });

const counterDisplay = document.getElementById("counter");
const decreaseBtn = document.getElementById("decrease");
const increaseBtn = document.getElementById("increase");
const resetBtn = document.getElementById("reset");

let counter = 0;

// Update counter display with animation
function updateCounter() {
  counterDisplay.textContent = counter;
  gsap.to(counterDisplay, { duration: 0.2, scale: 1.3, ease: "power1" });
  gsap.to(counterDisplay, { duration: 0.2, scale: 1, delay: 0.2 });
}

// Decrease Counter
decreaseBtn.addEventListener("click", () => {
  counter--;
  updateCounter();
  gsap.from(counterDisplay, { duration: 0.3, x: -30, opacity: 0.8, ease: "power1" });
});

// Increase Counter
increaseBtn.addEventListener("click", () => {
  counter++;
  updateCounter();
  gsap.from(counterDisplay, { duration: 0.3, x: 30, opacity: 0.8, ease: "power1" });
});

// Reset Counter
resetBtn.addEventListener("click", () => {
  counter = 0;
  updateCounter();
  gsap.from(counterDisplay, { duration: 0.4, y: -20, opacity: 0, ease: "power2" });
});
