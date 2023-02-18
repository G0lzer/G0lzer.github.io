var nameError = document.getElementById('name-error');
var ageError = document.getElementById('age-error');
var emailError = document.getElementById('email-error');
var countryError = document.getElementById('country-error');
var submitError = document.getElementById('submit-error');

function ValidateName() {
    var name = document.getElementById('contact-name').value;

    if (name.length == 0) {
        nameError.innerHTML = 'Name is required';
        return false;
    }
    if (!name.match(/^[A-Za-z]+\s[A-Za-z]+$/)) {
        nameError.innerHTML = 'Please enter a valid full name';
        return false;
    }

    nameError.innerHTML = '<i class="fa-solid fa-check-circle"></i>';

    sessionStorage.setItem('name', name);

    return true;

}

function ValidateAge() {
    var age = document.getElementById('contact-age').value;
    if (age.length == 0) {
        ageError.innerHTML = 'Age is required';
        return false;
    }
    if (isNaN(age)) {
        ageError.innerHTML = 'Type Digits';
        return false;
    }
    if (age < 18) {
        ageError.innerHTML = 'You must be 18+';
        return false;
    }
    ageError.innerHTML = '<i class="fa-solid fa-check-circle"></i>';
    return true;
}
function ValidateEmail() {
    var email = document.getElementById('contact-email').value;

    if (email.length == 0) {
        emailError.innerHTML = 'Email is required';
        return false;
    }
    if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(email)) {
        emailError.innerHTML = 'Email Invalid';
        return false;
    }
    emailError.innerHTML = '<i class="fa-solid fa-check-circle"></i>';
    return true;
}
function ValidateCountry() {
    var country = document.getElementById('contact-country').value;
    if (country.length == 0) {
        countryError.innerHTML = 'Country is required';
        return false;
    }
    var pattern = /^[A-Z][a-z]+$/;
    if (!pattern.test(country)) {
        countryError.innerHTML = 'Please enter a valid country name';
        return false;
    }
    countryError.innerHTML = '<i class="fa-solid fa-check-circle"></i>';
    return true;
}
var submitButton = document.querySelector('button[type="submit"]');
submitButton.addEventListener('click', function (event) {
    event.preventDefault();

    var isNameValid = ValidateName();
    var isAgeValid = ValidateAge();
    var isEmailValid = ValidateEmail();
    var isCountryValid = ValidateCountry();

    if (isNameValid && isAgeValid && isEmailValid && isCountryValid) {
        submitError.innerHTML = '';

        setTimeout(function () {
            window.location.href = "thanks.html";
        }, 2000);

        return true;
    } else {
        submitError.innerHTML = 'PLEASE FILL ALL FIELDS CORRECTLY'
    }
});





