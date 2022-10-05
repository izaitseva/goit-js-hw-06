
const refs = {
    inputName: document.querySelector("#name-input"),
    outputName: document.querySelector("#name-output"),
};

refs.inputName.addEventListener('input', onInputChange);

function onInputChange(event) {
    let value = event.currentTarget.value;
    console.log(value);

    if(value === "") {
        refs.outputName.textContent = "Anonymous";
    } else {
        refs.outputName.textContent = value;
    }
}