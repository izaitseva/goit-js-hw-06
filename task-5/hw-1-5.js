// input#name-input

const refs = {
    inputName: document.querySelector("#name-input"),
    outputName: document.querySelector("#name-output"),
};

// ${inputName}

refs.inputName.addEventListener('input', onInputChange);

function onInputChange(event) {
    console.log(event.currentTarget.value);
    refs.outputName.textContent = event.currentTarget.value;
}