const arrowUp = document.getElementById('arrowup');
const iconLocation = document.getElementById('iconlocation');
const inputLocation = document.getElementById('inputlocation');
iconLocation.addEventListener('click', arrowUpIcon);

function arrowUpIcon() {
  arrowUp.classList.toggle('active');
  inputLocation.classList.toggle('hide');
}
