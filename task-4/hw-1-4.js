const decrButton = document.querySelector('[data-action="decrement"]');
const incrButton = document.querySelector('[data-action="increment"]');

let counterValue = 0;

decrButton.addEventListener('click', () => {
    counterValue = counterValue - 1;
    let decrCounterEl = document.querySelector("#value");
    decrCounterEl.textContent = counterValue;
});

incrButton.addEventListener('click', () => {
    counterValue = counterValue + 1;
    let decrCounterEl = document.querySelector("#value");
    decrCounterEl.textContent = counterValue;
});