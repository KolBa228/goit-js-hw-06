

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}


const inputEl = document.querySelector('input');

const createBtn = document.querySelector('button[data-create]');

const destroyBtn = document.querySelector('button[data-destroy]');

const boxesContainer = document.querySelector('#boxes');

createBtn.addEventListener('click', createBoxes);

destroyBtn.addEventListener('click', destroyBoxes);

function clearBoxes() {
  boxesContainer.innerHTML = '';
}

function createBoxes() {

  const amount = Number(inputEl.value);

  clearBoxes();

  let size = 30;
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesContainer.appendChild(box);
    size += 10;
  }
}

function destroyBoxes() {
  clearBoxes();
}




