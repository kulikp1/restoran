document.addEventListener("DOMContentLoaded", function () {
    const orderButton = document.querySelector('.button'); 
    const closeButton = document.querySelector('.modal-btn');
    const form = document.querySelector('.modal-form');
    const backdrop = document.querySelector('.backdrop');
    const header = document.querySelector('.headerLine'); // Отримуємо хедер

    // Функція для показу тостів
    function showToast(message, type = 'success') {
        Toastify({
            text: message,
            duration: 3000,
            gravity: "top", 
            position: "right",
            backgroundColor: type === 'success' ? "green" : "red",
            stopOnFocus: true,
        }).showToast();
    }

    // Відкриття модального вікна
    orderButton.addEventListener('click', function () {
        backdrop.classList.add('is-open');
        document.body.style.overflow = 'hidden'; // Відключаємо прокрутку сторінки
        if (header) {
            header.style.display = 'none'; // Відкріплюємо хедер
        }
    });

    // Закриття модального вікна
    closeButton.addEventListener('click', function (event) {
        event.preventDefault();
        backdrop.classList.remove('is-open');
        document.body.style.overflow = ''; // Відновлюємо прокрутку сторінки
        if (header) {
            header.style.display = 'flex'; // Знову закріплюємо хедер
        }
    });

    // Функція валідації форми
    function validateForm() {
        const nameInput = form.querySelector('[name="name"]');
        const emailInput = form.querySelector('[name="email"]');
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
            showToast('You must accept the terms of the Privacy Policy.', 'error');
            isValid = false;
        }

        if (!isValid) {
            showToast('Please fill in all fields correctly.', 'error');
        }

        return isValid;
    }

    // Функція перевірки email
    function validateEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    // Обробник події для сабміту форми
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        if (validateForm()) {
            showToast('Форма успішно відправлена!');
            backdrop.classList.remove('is-open'); // Закриваємо модальне вікно
            document.body.style.overflow = ''; // Відновлюємо прокрутку сторінки
            if (header) {
                header.style.position = 'fixed'; // Знову закріплюємо хедер
            }
        }
    });
});
