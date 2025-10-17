let xTurn = false;

let turnHeader = document.querySelector('#whosTurnHeader');

document.addEventListener('DOMContentLoaded', () => {
  if (xTurn) {
    turnHeader.textContent = 'X Turn';
  } else {
    turnHeader.textContent = 'O Turn';
  }
});

function changeImage(image) {
  if (xTurn) {
    image.src = 'x.png';
    turnHeader.textContent = 'O Turn';
    xTurn = false;
  } else {
    image.src = 'o-300x300.png';
    turnHeader.textContent = 'X Turn';
    xTurn = true;
  }
}
