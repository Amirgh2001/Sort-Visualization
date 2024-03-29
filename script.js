class SquareRenderer {
  constructor(x, y, num) {
    this.x = x;
    this.y = y;
    this.num = num;
  }

  render() {
    const display = document.getElementById('display');
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.top = `${this.y}px`;
    square.style.left = `${this.x}px`;

    const number = document.createElement('span');
    number.textContent = this.num;
    number.classList.add('numberSpan')
    square.appendChild(number);
    display.appendChild(square);
  }
}

const display = document.getElementById('display');
const squareHeight = 50;
const numSquares = 12;
const displayHeight = display.clientHeight;
const spacing = (displayHeight - squareHeight * numSquares) / (numSquares + 1);

for (let i = 0; i < numSquares; i++) {
  const y = spacing * (i + 1) + squareHeight * i;
  const square = new SquareRenderer(475, y, Math.floor(Math.random() * 100) + 1);
  square
  square.render();
}

const spans = document.getElementsByClassName('numberSpan')
document.getElementById('randomBut').addEventListener('click', () => {
  for (let i = 0; i < spans.length; i++) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    spans[i].textContent = randomNumber;
  }
})
