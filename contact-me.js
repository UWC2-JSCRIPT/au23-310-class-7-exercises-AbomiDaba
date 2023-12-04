// TODO
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const form = document.getElementById('connect-form');
const message = document.getElementById('message');
const select = document.getElementById('contact-kind');
const jobOpportunity = document.getElementsByClassName('job-opportunity');
const languageSelect = document.querySelector('.talk-code');
const jobTitle = document.getElementById('job-title');

const validateLength = (input, min, e) => {
    if (input.value.trim().length >= min) {
        input.parentElement.classList.remove('invalid');
    } else {
        input.parentElement.classList.add('invalid');
        alert(`${input.getAttribute('placeholder')} must be at least ${min} characters`);

        e.preventDefault();
    }
}

const validateEmail = (emailInput, e) => {
    let re = /\w+@\w+\.\w+/;
    if (re.test(email.value.trim())) {
        emailInput.parentElement.classList.remove('invalid');
    } else {
        emailInput.parentElement.classList.add('invalid');
        alert(`Please submit a valid ${emailInput.getAttribute('placeholder')}`);
        e.preventDefault();

    }
}

form.addEventListener('submit', (e) => {
    validateLength(firstName, 3, e);
    validateLength(lastName, 3, e);
    validateEmail(email, e);
    validateLength(message, 10, e);
    if (!document.querySelector('.job-opportunity').classList.contains('hide')) {
        validateLength(jobTitle, 2, e)
        const re = /https?\:\/\/.+\..+/;
        if (!re.test(document.getElementById('company-site').value.trim())) {
            alert('Enter valid url');
        }
    } else if (!languageSelect.classList.contains('hide')) {
        if (document.getElementById('programming-language').value === 'choose') {
            alert('Please select a programming language');
        }
    }
})

select.addEventListener('click', (e) => {
    if (select.value === 'business') {
        languageSelect.classList.add('hide')
        for (let i = 0; i <= jobOpportunity.length; i++) {
            jobOpportunity.item(i).classList.remove('hide');
        }
    } else if (select.value === 'technical') {
        languageSelect.classList.remove('hide')
        for (let i = 0; i <= jobOpportunity.length; i++) {
            jobOpportunity.item(i).classList.add('hide');
        }
    }
    })