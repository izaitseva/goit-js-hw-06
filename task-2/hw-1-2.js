// Завдання 2

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos", 
  "Herbs",
  "Condiments",
];

const ulEl = document.querySelector("#ingredients");
const array = [];

ingredients.forEach(el => {
  const item = document.createElement("li");
  item.classList.add('item'); 
  item.textContent = el;

  array.push(item);
});

ulEl.append(...array);