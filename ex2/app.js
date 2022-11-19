const btn = document.querySelector(".btn");
const body = document.querySelector("body");
const p = document.querySelector("p");

const colors = ["#FFFFFF", "#99FFFF", "#FFCCFF", "#CCFFCC"];

function changeColor() {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  body.style.backgroundColor = randomColor;

  p.textContent = `${randomColor}`;
}

btn.addEventListener("click", changeColor);
