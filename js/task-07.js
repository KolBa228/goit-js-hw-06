

const fontSizeControl = document.getElementById('font-size-control');
const textEl = document.getElementById('text');

fontSizeControl.addEventListener('input', event => {
  const fontSize = event.target.value;
    textEl.style.fontSize = fontSize + 'px';
    
    if (fontSize <= 48) {
    textEl.textContent = 'Я маленька бусинка'
} else {
    textEl.textContent = 'Я здоровий пес барбос'
}

});

