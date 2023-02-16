let html = '';
function randomColor() {
    return Math.floor(Math.random() * 256);
}
function randomRGB(value) {
    const color = `rgb(${value()}, ${value()}, ${value()})`;
    return color;
}
for (i = 1; i <= 10; i++) {
    // let red = randomColor();
    // let green = randomColor();
    // let blue = randomColor();
    // let randomRGB = `rgb( ${red}, ${green}, ${blue} )`;
    html += `<div style="background-color: ${randomRGB(randomColor)}">${i}</div>`;
}

document.querySelector('main').innerHTML = html;