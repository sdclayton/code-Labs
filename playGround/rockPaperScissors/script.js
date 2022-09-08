// add event listener
// on click change color

// get what's needed from DOM
let sectionBtn = document.getElementById('.sectionBtn');
let firstSquare = document.getElementById('.first-square');
let secondSquare = document.getElementById('.second-square');
let thirdSquare = document.getElementById('.third-square');

// functions
const firstSquareChange = () => {
  console.log('Terra-Cotta');
}

console.log(firstSquareChange());

// add event listener
// firstSquare.onclick = () => console.log('Terra-Cotta');
// secondSquare.onclick = () => console.log('Independence');
// thirdSquare.onclick = () => console.log('Green Sheen')

firstSquare.addEventListener('click', firstSquareChange);