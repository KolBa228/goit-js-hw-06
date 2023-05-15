

const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

 
inputEl.addEventListener('input', event => {
     
    // outputEl.textContent = inputEl ? event.target.value : 'Anonymous';

    outputEl.textContent = event.target.value ? event.target.value : 'Anonymous';

    

});