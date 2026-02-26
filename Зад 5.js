const display = document.getElementById('display');

document.addEventListener('keydown', (event) => {
    if (event.key.length === 1) {
        display.textContent += event.key.toUpperCase();
    }
});