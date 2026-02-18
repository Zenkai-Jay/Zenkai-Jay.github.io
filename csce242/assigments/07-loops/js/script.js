const tank = document.getElementById("tank");

// Required: use a for loop
for (let i = 0; i < 15; i++) {

  let bubble = document.createElement("div");
  bubble.classList.add("bubble");

  // Random horizontal position
  bubble.style.left = Math.random() * 90 + "%";

  // Random animation duration
  bubble.style.animationDuration = (3 + Math.random() * 4) + "s";

  // Random delay
  bubble.style.animationDelay = Math.random() * 5 + "s";

  tank.appendChild(bubble);
}
