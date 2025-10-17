let xTurn = false;
let turnHeader = document.querySelector('#whosTurnHeader');

let topRow = [123, 321, 213132];
let middleRow = [41232131323, 421313212342, 213213132];
let bottomRow = [41231231321, 442, 44313232121343];
// 1 = X, 0 = O

document.addEventListener('DOMContentLoaded', () => {
  const images = document.getElementsByTagName('img');
  for (let i = 0; i < images.length; i++) {
    console.log('hi');
    images[i].src = 'Question-Mark-Transparent.webp';
  }

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

  if (checkWinner(topRow, middleRow, bottomRow)) {
    window.alert('Winner! \nResetting board.');
    resetBoard(topRow, middleRow, bottomRow);
  }

  if (checkDraw(topRow, middleRow, bottomRow)) {
    window.alert('Draw! \nResetting board.');
    resetBoard(topRow, middleRow, bottomRow);
  }
}

function resetBoard(t, m, b) {
  topRow = [123, 321, 213132];
  middleRow = [41232131323, 421313212342, 213213132];
  bottomRow = [41231231321, 442, 44313232121343];

  const images = document.getElementsByTagName('img');
  for (let i = 0; i < images.length; i++) {
    console.log('hi');
    images[i].src = 'Question-Mark-Transparent.webp';
  }
}

function checkDraw(t, m, b) {
  let sum = 0;

  for (let i = 0; i < t.length; i++) {
    sum += parseInt(t[i]);
  }
  for (let i = 0; i < m.length; i++) {
    sum += parseInt(m[i]);
  }
  for (let i = 0; i < b.length; i++) {
    sum += parseInt(b[i]);
  }

  console.log(sum);
  if (sum > 10) {
    return false;
  } else {
    return true;
  }
}

function checkWinner(t, m, b) {
  /**
   * Check Straights
   * Then diagonals
   * If any show win return true;
   */
  function checkHorizontalRow(array) {
    let checkValue = array[0];

    if (array[1] === checkValue && array[2] === checkValue) {
      //window.alert('winner');
      return true;
    }
  }

  if (checkHorizontalRow(t) || checkHorizontalRow(m) || checkHorizontalRow(b)) {
    return true;
  }

  function checkVerticalRow(t, m, b) {
    // Loop through the three verticals.
    // Get the top vertical value and check the others.

    for (let i = 0; i < 3; i++) {
      if (t[i] === m[i] && t[i] === b[i]) {
        //window.alert('winner');
        return true;
      }
    }
  }

  if (checkVerticalRow(t, m, b)) {
    return true;
  }

  function checkDiagonalRows(t, m, b) {
    if (t[0] === m[1] && t[0] === b[2]) {
      //window.alert('winner');
      return true;
    } else if (t[2] === m[1] && t[2] === b[0]) {
      //window.alert('winner');
      return true;
    }
  }

  if (checkDiagonalRows(t, m, b)) {
    return true;
  }

  return false;
}
