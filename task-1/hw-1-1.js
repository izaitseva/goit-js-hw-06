// Завдання 1

const categoriesEl = document.querySelector('ul#categories');
const itemsEl = categoriesEl.querySelectorAll('.item');

console.log(`Number of categories: ${itemsEl.length}`);
itemsEl.forEach((item)=> {
  console.log(" ");

  const h2El = item.querySelector('h2');
  
  console.log(`Category: ${h2El.textContent}`); 
  
  const liEl = item.querySelectorAll('li');
  
  // console.log(`Elements: ${liEl.length}`);
  console.log(`Elements: liEl.children`);
});