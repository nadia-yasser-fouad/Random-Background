const main = document.querySelector("main");
const changeBtn = document.querySelector("#changeBtn");

function changeColor() {
  // rgb(red,green,blue)
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  main.style.backgroundColor = `rgba(${red},${green},${blue})`;
}
changeBtn.addEventListener('click', changeColor);
