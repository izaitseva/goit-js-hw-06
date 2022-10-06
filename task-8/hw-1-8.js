const form = document.querySelector(".login-form");

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) { 

    event.preventDefault();
    
    const formElements = event.currentTarget.elements;

    console.log(event);

    const mail = formElements.email.value;
    const pass = formElements.password.value;
    
    if (mail === "" || pass  === "") {
        alert('Всі поля повинні бути заповнені');
    } else {
        let userData = {
            email: mail,
            password: pass    
        };
        console.log(userData)
    };
    form.reset();

};

