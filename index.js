let xTurn = false;
let turnHeader = document.querySelector('#whosTurnHeader');

let topRow = [4, 44, 444];
let middleRow = [4, 44, 444];
let bottomRow = [4, 44, 444];
// 1 = X, 0 = O

document.addEventListener('DOMContentLoaded', () => {
  if (xTurn) {
    turnHeader.textContent = 'X Turn';
  } else {
    turnHeader.textContent = 'O Turn';
  }
});

function changeImage(image, id) {
  if (xTurn) {
    image.src = 'x.png';
    turnHeader.textContent = 'O Turn';
    handleGridUpdate(id);
    xTurn = false;
  } else {
    image.src = 'o-300x300.png';
    turnHeader.textContent = 'X Turn';
    handleGridUpdate(id);
    xTurn = true;
  }
}

function handleGridUpdate(id) {
  switch (id) {
    case 1:
      if (xTurn) {
        topRow[0] = 1;
      } else {
        topRow[0] = 0;
      }
      break;
    case 2:
      if (xTurn) {
        topRow[1] = 1;
      } else {
        topRow[1] = 0;
      }
      break;
    case 3:
      if (xTurn) {
        topRow[2] = 1;
      } else {
        topRow[2] = 0;
      }
      break;
    case 4:
      if (xTurn) {
        middleRow[0] = 1;
      } else {
        middleRow[0] = 0;
      }
      break;
    case 5:
      if (xTurn) {
        middleRow[1] = 1;
      } else {
        middleRow[1] = 0;
      }
      break;
    case 6:
      if (xTurn) {
        middleRow[2] = 1;
      } else {
        middleRow[2] = 0;
      }
      break;
    case 7:
      if (xTurn) {
        bottomRow[0] = 1;
      } else {
        bottomRow[0] = 0;
      }
      break;
    case 8:
      if (xTurn) {
        bottomRow[1] = 1;
      } else {
        bottomRow[1] = 0;
      }
      break;
    case 9:
      if (xTurn) {
        bottomRow[2] = 1;
      } else {
        bottomRow[2] = 0;
      }
      break;
  }
  checkWinner(topRow, middleRow, bottomRow);
}

function checkWinner(t, m, b) {
  /**
   * Check Straights
   * Then diagonals
   * If any show win return true;
   */
    function checkRow(array){
        let checkValue = array[0]

        if(array[1] === checkValue && array[2] === checkValue){
            window.alert('Winner');
            return true;
        }
    }

    checkRow(t);
    checkRow(m);
    checkRow(b);

}
