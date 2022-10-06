const inputSizeEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

inputSizeEl.addEventListener('input', function (event) {
    let inputValue = event.currentTarget.value;
    textEl.style.fontSize = `${inputValue}px`;
}
)