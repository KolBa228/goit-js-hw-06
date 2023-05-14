const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
const valueSpan = document.querySelector('#value');

decrementButton.addEventListener('click', () => {
    const currentValue = Number(valueSpan.textContent)
    valueSpan.textContent = currentValue - 1
});

incrementButton.addEventListener('click', () => {
    const currentValue = Number(valueSpan.textContent)
    valueSpan.textContent = currentValue + 1
});