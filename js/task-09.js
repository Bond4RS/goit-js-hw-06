function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector("body");

const buttonColor = document.querySelector(".change-color");
console.log(buttonColor);
buttonColor.addEventListener("click", changecolor);

const spanColor = document.querySelector(".color");
console.log(spanColor);

function changecolor() {
  const color = getRandomHexColor();
  spanColor.textContent = color;
  bodyEl.style.backgroundColor = color;
}
