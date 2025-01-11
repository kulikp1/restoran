const orderButton = document.querySelector('.button');
const closeButton = document.querySelector('.modal-btn');
const form = document.querySelector('.form'); // Додано посилання на форму
const inputs = form.querySelectorAll('input'); // Вибір усіх інпутів форми

orderButton.addEventListener('click', function(event) {
    event.preventDefault(); 
    if (validateForm()) {
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

function validateForm() {
    let isValid = true;

    inputs.forEach(input => {
        const errorElement = input.nextElementSibling; // Припускаємо, що елемент для помилок знаходиться поруч
        if (input.value.trim() === '') {
            isValid = false;
            showError(input, errorElement, 'Це поле обов\'язкове для заповнення');
        } else if (input.type === 'email' && !isValidEmail(input.value)) {
            isValid = false;
            showError(input, errorElement, 'Введіть коректну email адресу');
        } else {
            clearError(input, errorElement);
        }
    });

    return isValid;
}

function showError(input, errorElement, message) {
    input.classList.add('input-error'); // Додаємо клас для стилізації помилки
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.classList.add('error-visible');
    }
}

function clearError(input, errorElement) {
    input.classList.remove('input-error');
    if (errorElement) {
        errorElement.textContent = '';
        errorElement.classList.remove('error-visible');
    }
}

function isValidEmail(email) {
    // Простий шаблон для перевірки email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}
