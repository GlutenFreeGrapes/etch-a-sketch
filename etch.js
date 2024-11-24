const adj_button = document.createElement("button")
document.body.appendChild(adj_button)

const display = document.createElement("div")
display.classList.add("display");
document.body.appendChild(display);

adj_button.textContent = "Change number of boxes"
adj_button.addEventListener('click', () => {
  let input;
  do {
    input = prompt("How many boxes? Enter a number from 1 to 100");
  }
  while(!(input && Number.isInteger(Number(input)) && 1 <= Number(input) && Number(input) <= 100))
  while (display.childNodes.length) {
    display.removeChild(display.lastChild)
  }
  generate(Number(input))
})

let colorOption = 0;

function color(target) {
  if (colorOption == 0) {
    target.style.opacity = 1.0;
    target.style.backgroundColor = "red";
  }
  else if (colorOption == 1) {
    target.style.opacity = 1.0;
    target.style.backgroundColor = "rgb("+Math.floor(Math.random()*256)+","+Math.floor(Math.random()*256)+","+Math.floor(Math.random()*256)+")";
  }
  else {
    if (target.style.opacity == 1.0)
      target.style.opacity = 0.0;
    target.style.opacity = Number(target.style.opacity) + 0.1;
  }
}

function generate(number_squares) {
  for (let row = 0; row < number_squares; row++) {
    const container = document.createElement("div")
    container.classList.add("container")

    for (let col = 0; col < number_squares; col++) {
      const square = document.createElement("div")
      square.classList.add("square")

      square.addEventListener('mouseenter', (event) => {color(event.target)})

      container.appendChild(square);
    }
    display.appendChild(container);
  }
}

const solid = document.createElement("button")
const random = document.createElement("button")
const opaque = document.createElement("button")

solid.textContent = "Solid";
random.textContent = "Random RGB color"
opaque.textContent = "Progressive Darkening"

solid.addEventListener('click', () => {solid.disabled = true; random.disabled = false; opaque.disabled = false; colorOption = 0;})
random.addEventListener('click', () => {solid.disabled = false; random.disabled = true; opaque.disabled = false; colorOption = 1;})
opaque.addEventListener('click', () => {solid.disabled = false; random.disabled = false; opaque.disabled = true; colorOption = 2;})

document.body.appendChild(solid)
document.body.appendChild(random)
document.body.appendChild(opaque)

solid.disabled = true;

generate(16)
