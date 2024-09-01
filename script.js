// Obtiene el elemento del display
const display = document.getElementById('display');

// Limpia el display
function clearDisplay() {
    display.textContent = '0';
}

// Agrega un valor al display
function appendToDisplay(value) {
    if (display.textContent === '0' && value !== '.') {
        display.textContent = value;
    } else {
        display.textContent += value;
    }
}

// Calcula la expresión en el display
function calculate() {
    try {
        display.textContent = eval(display.textContent) || '0';
    } catch (e) {
        display.textContent = 'Error';
    }
}
