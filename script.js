const container = document.querySelector('.container');

function makeGrid(number) {
    for (let i = 0; i < number ** 2; i++) {
        let square = document.createElement('div');
    let length = container.clientHeight / number;
    square.style.cssText = `width: ${length}px; height: ${length}px;`
    square.classList.add('square');
    container.appendChild(square);
    }
}

function changeColor() {
    this.style.backgroundColor = 'black';
}

makeGrid(16);

const squares = document.querySelectorAll('div.square');
squares.forEach( (square) => square.addEventListener('mouseover', changeColor) );
