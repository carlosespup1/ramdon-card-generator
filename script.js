let cardIcon = document.querySelectorAll('.card-icon');
let cardNumber = document.querySelector('.card-number');

const icons = ['♦', '♥', '♠', '♣'];
const elements = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '9','J', 'K', 'Q'];

const getIds = () => {
  let getIcon = Math.floor(Math.random() * 4);
  let getElements = Math.floor(Math.random() * 13);

  return ( getIcon, getElements );
}

const generateCard = (icon, element) => {
  cardIcon[0].innerHTML = icons[icon];
  cardIcon[1].innerHTML = icons[icon];
  cardNumber.innerHTML = elements[element];
}

generateCard(getIds);

setInterval(() => {
  let getIcon = Math.floor(Math.random() * 4);
  let getElements = Math.floor(Math.random() * 13);

  generateCard(getIcon, getElements);
}, 2000);