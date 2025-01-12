const orderButton = document.querySelector('.button'); // Кнопка для відкриття модального вікна
const closeButton = document.querySelector('.modal-btn'); // Кнопка для закриття модального вікна
const form = document.querySelector('.modal-form'); // Форма для валідації

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

// Функція для валідації форми
function validateForm() {
    const nameInput = form.querySelector('[name="name"]');
    const emailInput = form.querySelector('[name="email"]');
    const phoneInput = form.querySelector('[name="phone"]');
    const privacyCheckbox = form.querySelector('[name="user-privacy"]');

    let isValid = true;

    // Перевірка поля імені
    if (!nameInput.value.trim()) {
        nameInput.classList.add('error');
        isValid = false;
    } else {
        nameInput.classList.remove('error');
    }

    // Перевірка поля електронної пошти
    if (!validateEmail(emailInput.value)) {
        emailInput.classList.add('error');
        isValid = false;
    } else {
        emailInput.classList.remove('error');
    }

    // Перевірка поля телефону
    if (!/^\d{10}$/.test(phoneInput.value.trim())) {
        phoneInput.classList.add('error');
        isValid = false;
    } else {
        phoneInput.classList.remove('error');
    }

    // Перевірка чекбокса
    if (!privacyCheckbox.checked) {
        alert('Ви повинні прийняти умови Політики конфіденційності.');
        isValid = false;
    }

    // Якщо форма не валідна, показати повідомлення
    if (!isValid) {
        alert('Будь ласка, заповніть всі поля правильно.');
    }

    return isValid;
}

// Функція для перевірки email
function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

// Обробка події submit
form.addEventListener('submit', function (event) {
    event.preventDefault();

    if (validateForm()) {
        alert('Форма успішно відправлена!');
        // Тут можна додати реальну відправку форми, якщо це потрібно
    }
});
