const root = document.documentElement;
let fontSize = 100;

document.querySelectorAll("button").forEach(btn => {
  btn.addEventListener("click", () => {
    if (btn.textContent === "A+") fontSize += 10;
    if (btn.textContent === "A-") fontSize -= 10;
    if (btn.textContent === "A") fontSize = 100;
    root.style.fontSize = fontSize + "%";
  });
});
