const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
]; 


const ulEl = document.querySelector(".gallery");
const array = [];

images.forEach(el => {
  const liEl = document.createElement("li");
  liEl.classList.add('list_item');

  liEl.insertAdjacentHTML('afterbegin', `<img src="${el.url}" alt="${el.alt}" />`);
  array.push(liEl);
});

ulEl.append(...array);
