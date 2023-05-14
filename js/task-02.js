const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector('#ingredients');

ingredients.forEach((ingredient) => {
  const item = document.createElement('li');
    item.textContent = ingredient;
  listEl.appendChild(item);
  console.log(item)
});




