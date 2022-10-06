function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }

let buttonEl = document.querySelector("button.change-color");
let colorEl = document.querySelector(".color");

buttonEl.addEventListener('click', onClick);

function onClick(event) {
  document.body.style.backgroundColor = getRandomHexColor();
}