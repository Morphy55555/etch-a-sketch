const body = document.querySelector('body');
const container = document.querySelector('.container');
const newContainer = document.querySelector('.newContainer');
for (i = 1; i <= 16 * 16; i++) {
    const gridCreate = document.createElement("div");
    gridCreate.className = 'divs';
    container.appendChild(gridCreate);
}

// userColorChoice = prompt("select a colour, spell it right lad");

function colorChange() {
const divs = document.querySelectorAll('.divs');
    divs.forEach((div) => {
        div.addEventListener('mouseover', () =>
        div.style.backgroundColor = 'purple'); 
        });
};
colorChange();

const buttons = document.querySelector('button');
buttons.addEventListener('click', () => {
    getGridSize = prompt("Enter a number, to choose the grid size, eg '10' for a 10x10 grid");
    if (getGridSize > 0 && getGridSize < 100) {
        body.removeChild(container);
        body.appendChild(newContainer);
        for (i = 1; i <= getGridSize * getGridSize; i++) {
        const gridCreate = document.createElement("div");
        gridCreate.className = 'divs';
        newContainer.appendChild(gridCreate);
        }
        colorChange();
        
    }
});


