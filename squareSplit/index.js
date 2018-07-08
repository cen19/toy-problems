// only square logic
class Square {
  constructor() {
    this.children = [];
  }

  splitSquareIntoFours() {
    let amount = 4;
    while (amount > 0) {
      this.children.push(new Square());
      amount--;
    }
  }

}

// only UI logic
class SquareUI {
  constructor() {
    this.square = new Square();
    this.renderSquares(this.square);
  }

  handleClick(e) {
    console.log('hello');
    console.log('clicked on, ', e);
    this.square.splitSquareIntoFours();
  }

  makeSquareElement() {
    let square = document.createElement('div');
    square.className = 'square';
    square.addEventListener('click', this.handleClick.bind(this));

    return square;
  }

  renderSquares(squareState) {
    const body = document.querySelector('body');
    console.log(body);
    body.appendChild(this.makeSquareElement());
  }


}

let currentSquare = new SquareUI();