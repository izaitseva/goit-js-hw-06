function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

let boxesEl = document.querySelector("#boxes"); 
const createBtn = document.querySelector("[data-create]");
let input = document.querySelector("[type=number]");
const destroyBtn = document.querySelector("[data-destroy]")

createBtn.addEventListener('click', onClick);

function createBoxes(amount) {

  let array = [];
  let height = 30;
  let width = 30;

  for (let i = 0; i < amount; i ++) {
    let div = document.createElement('div');

    div.style.width = `${width}px`;
    div.style.height = `${height}px`;
    div.style.backgroundColor = getRandomHexColor();

    height = height + 10;
    width = width + 10;

    array.push(div);
  }
  boxesEl.append(...array);
} 

function onClick(event) {
  createBoxes(input.value)
  console.log(input);
}


destroyBtn.addEventListener('click', destroyBoxes);

function destroyBoxes(event) {
  boxesEl.innerHTML = "";
  input.value = "";
}