const orderButton = document.querySelector('.button');
const closeButton = document.querySelector('.modal-btn');
const form = document.querySelector('#order-form'); // Форма для перевірки

orderButton.addEventListener('click', function (event) {
    {
        openBackdrop();
    
    }
});

closeButton.addEventListener('click', function(event) {
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
    const nameInput = form.querySelector('[name="name"]'); // Приклад поля імені
    const emailInput = form.querySelector('[name="email"]'); // Приклад поля електронної пошти
    const phoneInput = form.querySelector('[name="phone"]'); // Приклад поля телефону

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

    // Перевірка поля телефону (тільки цифри)
    if (!/^\d{10}$/.test(phoneInput.value)) {
        phoneInput.classList.add('error');
        isValid = false;
    } else {
        phoneInput.classList.remove('error');
    }

    return isValid;
}

// Функція для перевірки email
function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}
