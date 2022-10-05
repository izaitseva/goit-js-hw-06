

const input = document.querySelector("#validation-input");
let dataInputLength = document.querySelector(('[data-length="6"]'));
const inputValue = " ";

// ${inputName}

input.addEventListener('blur', onInputBlur);
    function onInputBlur() {
    if(input == dataInputLength) {
        return inputValue;
    }
    console.log('всё ок');
}

// input#name-input