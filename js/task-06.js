

const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('input', onInputChange);

function onInputChange(event) {
  const inputLength = event.target.value.length;
  const requiredLength = parseInt(inputEl.getAttribute('data-length'));

  if (inputLength === requiredLength) {
    inputEl.classList.remove('invalid');
    inputEl.classList.add('valid');
  } else {
    inputEl.classList.remove('valid');
    inputEl.classList.add('invalid');
    }
};