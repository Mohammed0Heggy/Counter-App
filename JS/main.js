let count = 0;
let num = document.querySelector(".number");
let inc = document.querySelector(".inc");
let dec = document.querySelector(".dec");
let reset = document.querySelector(".reset");
let btns = document.querySelector(".btns");

btns.addEventListener("click", (e) => {
  let current = e.target.classList;
  if (current.contains("inc")) {
    count++
  } else if (current.contains("dec")) {
    count--
  } else {
    count = 0;
  }

  if (count > 0) {
    num.style.color = "#00ff00"
  } else if (count < 0) {
    num.style.color = "#ff0000"
  } else {
    num.style.color = "#000000"

  }
  num.textContent = count;
})