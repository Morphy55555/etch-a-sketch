
const container = document.querySelector('.container');
for (i = 1; i <= 16 * 16; i++) {
    const gridCreate = document.createElement("div");
    gridCreate.className = 'divs';
    container.appendChild(gridCreate);
}
const divs = document.querySelectorAll('.divs');
divs.forEach((div) => {
    div.addEventListener('mouseover', () =>
    div.style.backgroundColor = 'purple');
    // alert('clicked lad'));
});

