const container = document.querySelector('.container')
for (i = 1; i <= 16 * 16; i++) {
const divCreate = document.createElement("div");
divCreate.className = 'divs';
container.appendChild(divCreate);
}