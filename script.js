let mode = 'black';

const container = document.querySelector('.container');

const buttons = document.querySelectorAll('button.color-option');
buttons.forEach( (button) => button.addEventListener('click', changeMode) );

const resetButton = document.querySelector('button.reset');
resetButton.addEventListener('click', resetGrid);

const slider = document.querySelector('input[name="grid-size"]');
const sliderValue = document.querySelector('div.grid-size-value');
sliderValue.textContent = slider.value;

slider.addEventListener('input', () => sliderValue.textContent = slider.value);

makeGrid(16);

function makeGrid(number) {
    for (let i = 0; i < number ** 2; i++) {
        let square = document.createElement('div');
        square.style.cssText = `flex-basis: ${100/number}%; background-color: rgb(255, 255, 255);`;
        square.addEventListener('mouseover', colorSquare);
        container.appendChild(square);
    }
}

function changeMode() {
    mode = this.getAttribute('data-option');
}

function colorSquare() {
    switch (mode) {
        case 'black':
            this.style.backgroundColor = 'hsl(0, 0%, 0%)';        
            break;
        case 'gray':
            this.style.backgroundColor = 'hsl(0, 0%, 70%)';
            break;
        case 'random':
            this.style.backgroundColor = generateRandomColor();
            break;
        case 'darken':
            this.style.backgroundColor = darkenColor(this.style.backgroundColor);
            break;
        case 'erase':
            this.style.backgroundColor = 'rgb(255, 255, 255)';
    }
}

function darkenColor(color) {
    colorValues = color.slice(4, -1).split(',').map(Number);
    colorValues = colorValues.map( (value) => value < 25.5 ? 0 : Math.floor(value - 25.5) );
    return `rgb(${colorValues[0]}, ${colorValues[1]}, ${colorValues[2]})`;
}

function generateRandomColor() {
    return `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
}

function resetGrid() {
    let squares = document.querySelectorAll('.container div');
    squares.forEach( (square) => container.removeChild(square) );
    makeGrid(slider.value);
}