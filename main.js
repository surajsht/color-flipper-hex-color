let currentColor = document.querySelector(".current-color");
let btn = document.querySelector(".click");
let body = document.querySelector("body");

let hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];

btn.addEventListener("click", function () {
  let hexColor = "#";

  for (let i = 0; i < 6; i++) {
    hexColor += hex[randomNumber()];
  }

  body.style.backgroundColor = hexColor;
  currentColor.textContent = hexColor;
});

function randomNumber() {
  return Math.floor(Math.random() * hex.length);
}
