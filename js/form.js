const orderButton = document.querySelector('.button'); 
const closeButton = document.querySelector('.modal-btn');
const form = document.querySelector('.modal-form');

orderButton.addEventListener('click', function () {
    openBackdrop();
});

closeButton.addEventListener('click', function (event) {
    event.preventDefault();
    closeBackdrop();
});

function openBackdrop() {
    const backdrop = document.querySelector('.backdrop');
    backdrop.classList.add('is-open');
}

function closeBackdrop() {
    const backdrop = document.querySelector('.backdrop');
    backdrop.classList.remove('is-open');
}

function validateForm() {
    const nameInput = form.querySelector('[name="name"]');
    const emailInput = form.querySelector('[name="email"]');
    const phoneInput = form.querySelector('[name="phone"]');
    const privacyCheckbox = form.querySelector('[name="user-privacy"]');

    let isValid = true;

    if (!nameInput.value.trim()) {
        nameInput.classList.add('error');
        isValid = false;
    } else {
        nameInput.classList.remove('error');
    }

    if (!validateEmail(emailInput.value)) {
        emailInput.classList.add('error');
        isValid = false;
    } else {
        emailInput.classList.remove('error');
    }

    if (!privacyCheckbox.checked) {
        alert('Ви повинні прийняти умови Політики конфіденційності.');
        isValid = false;
    }

    if (!isValid) {
        alert('Будь ласка, заповніть всі поля правильно.');
    }

    return isValid;
}

function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

form.addEventListener('submit', function (event) {
    event.preventDefault();

    if (validateForm()) {
        alert('Форма успішно відправлена!');
        closeBackdrop(); // Закриваємо модалку після успішного заповнення форми
    }
});
