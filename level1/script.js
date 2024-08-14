document.addEventListener('DOMContentLoaded', function () {
    var button = document.getElementById('colorChangeButton');

    button.addEventListener('click', function () {
        if (button.style.backgroundColor === 'rgb(40, 167, 69)') { // Initial color
            button.style.backgroundColor = '#dc3545'; // Change to red
        } else {
            button.style.backgroundColor = '#28a745'; // Change back to green
        }
    });
});

function clearDisplay() {
    document.getElementById('display').innerText = '0';
}

function deleteLast() {
    const display = document.getElementById('display');
    display.innerText = display.innerText.slice(0, -1) || '0';
}

function appendToDisplay(value) {
    const display = document.getElementById('display');
    if (display.innerText === '0' && value !== '.') {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}

function calculate() {
    const display = document.getElementById('display');
    try {
        display.innerText = eval(display.innerText.replace('%', '/100'));
    } catch (e) {
        display.innerText = 'Error';
    }
}
