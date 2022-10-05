const input = document.querySelector("#validation-input");

input.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    let inputEl = event.target;

    let dataLength = inputEl.getAttribute("data-length");
    let inputValue = inputEl.value;
    let inputLength = inputValue.length;



    if (inputLength === Number(dataLength)) {
        inputEl.classList.add("valid");
        inputEl.classList.remove("invalid");
    } else {
        inputEl.classList.add("invalid");
        inputEl.classList.remove("valid");
    }

    console.log(inputEl);
}