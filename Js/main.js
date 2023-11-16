const btn = document.querySelector(".btn-1");
const modal = document.querySelector(".my-modal");
const closeModalBtn = document.querySelector(".close-modal");

btn.addEventListener('click', () => {
	modal.style.display = 'block';
});

closeModalBtn.addEventListener('click', () => {
	modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
	if (e.target == modal) {
		modal.style.display = 'none';
	}
});

// Second Modal

const btnTwo = document.querySelector(".btn-2");
const modalTwo = document.querySelector(".my-modal2");
const closeModalBtnTwo = document.querySelector(".close-modal2");

btnTwo.addEventListener('click', () => {
	modalTwo.style.display = 'block';
});

closeModalBtnTwo.addEventListener('click', () => {
	modalTwo.style.display = 'none';
});

window.addEventListener('click', (e) => {
	if (e.target == modalTwo) {
		modalTwo.style.display = 'none';
	}
});


// Third Modal

const btn3 = document.querySelector(".btn-gifts");
const modal3 = document.querySelector(".my-modal3");
const closeModalBtn3 = document.querySelector(".close-modal3");

btn3.addEventListener('click', () => {
	modal3.style.display = 'block';
});

closeModalBtn3.addEventListener('click', () => {
	modal3.style.display = 'none';
});

window.addEventListener('click', (e) => {
	if (e.target == modal3) {
		modal3.style.display = 'none';
	}
});


// Form modal

const btnF = document.querySelector(".btn-form");
const modalF = document.querySelector(".my-modal4");
const closeModalBtnF = document.querySelector(".close-modal4");

btnF.addEventListener('click', () => {
	modalF.style.display = 'block';
});

closeModalBtnF.addEventListener('click', () => {
	modalF.style.display = 'none';
});

window.addEventListener('click', (e) => {
	if (e.target == modalF) {
		modalF.style.display = 'none';
	}
});

// Course modal

const btnC = document.querySelector(".btn-course");
const modalC = document.querySelector(".my-modal5");
const closeModalBtnC = document.querySelector(".close-modal5");

btnC.addEventListener('click', () => {
	modalC.style.display = 'block';
});

closeModalBtnC.addEventListener('click', () => {
	modalC.style.display = 'none';
});

window.addEventListener('click', (e) => {
	if (e.target == modalC) {
		modalC.style.display = 'none';
	}
});


    // Отримуємо всі елементи input форми
    const formInputs = document.querySelectorAll('form input');

    // Додаємо обробник подій для кожного елемента
    formInputs.forEach(input => {
        // Обробник події при фокусуванні на елементі
        input.addEventListener('focus', function () {
            // Замінюємо атрибут placeholder на порожню строку
            this.setAttribute('placeholder', '');
        });

        // Обробник події при втраті фокусу з елемента
        input.addEventListener('blur', function () {
            // Перевіряємо, чи поле введення пусте перед відновленням placeholder
            if (this.value === '') {
                this.setAttribute('placeholder', this.getAttribute('data-original-placeholder'));
            }
        });

        // Зберігаємо оригінальний placeholder в атрибуті data-original-placeholder
        input.setAttribute('data-original-placeholder', input.getAttribute('placeholder'));
    });