let clickCounter = 0;
let addedImage = null;  // Змінна для збереження доданого зображення

function changeStyle(elementId, selector) {
    const element = document.getElementById(elementId);
    if (clickCounter % 2 === 0) {
        element.style.backgroundColor = element.style.backgroundColor === 'lightblue' ? 'white' : 'lightblue';
        element.style.color = element.style.color === 'black' ? 'white' : 'black';
    } else {
        const selectedElement = document.querySelector(selector);
        selectedElement.style.backgroundColor = selectedElement.style.backgroundColor === 'lightcoral' ? 'white' : 'lightcoral';
        selectedElement.style.color = selectedElement.style.color === 'black' ? 'white' : 'black';
    }
    clickCounter++;
}

// Функція для додавання нового зображення
function addImage() {
    if (!addedImage) {
        addedImage = document.createElement('img');
        addedImage.src = 'image/lviv.jpg';
        addedImage.alt = 'Додане зображення Львова';
        addedImage.width = 600;
        document.body.appendChild(addedImage);
    }
}

// Функція для збільшення розміру доданого зображення
function increaseImage() {
    if (addedImage) {
        addedImage.width += 50;
    }
}

// Функція для зменшення розміру доданого зображення
function decreaseImage() {
    if (addedImage && addedImage.width > 50) {
        addedImage.width -= 50;
    }
}

// Функція для видалення доданого зображення
function removeImage() {
    if (addedImage) {
        addedImage.remove();
        addedImage = null;  // Очищуємо змінну після видалення
    }
}