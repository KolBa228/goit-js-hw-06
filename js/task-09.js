function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

const words = ['ОПА', 'А ВОТ ТАК?', 'ЕЖЖИ СИЛА', 'ЧИЗАЗ', 'ОГО', 'КИСЛИЙ БОРЩ МЕНІ В СТАКАНЧИК'];

const btn = document.querySelector('.change-color');
const body = document.querySelector('body');
const colorInf = document.querySelector('.color');

btn.addEventListener('click', (event) => {
  const randomColor = getRandomHexColor();
  const randomText = words[Math.floor(Math.random() * words.length)];
  body.style.backgroundColor = randomColor;
  colorInf.textContent = `${randomText} - ${randomColor}`;
});
