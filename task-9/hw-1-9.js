function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }

let button = document.querySelector("button.change-color");
let color = document.querySelector(".color");

button.addEventListener('click', onClick);

function onClick () {
return button; 
}