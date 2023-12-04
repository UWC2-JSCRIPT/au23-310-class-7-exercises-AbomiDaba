// TODO
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const form = document.getElementById('connect-form');

const validateLength = (input, min, e) => {
    if (input.value.trim().length >= min) {
        input.parentElement.classList.remove('invalid');
    } else {
        input.parentElement.classList.add('invalid');
        console.log('Bad input');
        e.preventDefault();
    }
}

const validateEmail = (emailInput, e) => {
    let re = /\w+@\w+\.\w+/;
    if (re.test(email.value.trim())) {
        emailInput.parentElement.classList.remove('invalid');
    } else {
        emailInput.parentElement.classList.add('invalid');
        console.log('Bad input');
        e.preventDefault();

    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateLength(firstName, 3, e);
    validateLength(lastName, 3, e);
    validateEmail(email, e);
})