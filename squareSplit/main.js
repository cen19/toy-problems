let square = document.querySelector('.square');

let squares = [1];

const splitSquare = function(e) {
  console.log('hi');
  squares.forEach(el => {
    if (el === 1) {
      el = [1, 1, 1, 1];
    }
  });
  // renderSquare(squares);
  console.log(squares);
};


// const createSquare = function() {
//   let square = document.createElement('div');
//   square.classList.add('square');
// };
// // squares will be in array of arrays
// const renderSquare = function(squares) {
//   let stucture = document.createElement('div');
//   stucture.setAttribute('square')
// };

square.addEventListener('click', splitSquare);