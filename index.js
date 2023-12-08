let result = document.getElementById("result");
let red = document.getElementById("redOut");
let blue = document.getElementById("blueOut");
let green = document.getElementById("greenOut");
let redString, blueString, greenString;
let body = document.querySelector("body");

function redChange(value) {
  red.value = value;
}

function blueChange(value) {
  blue.value = value;
}

function greenChange(value) {
  green.value = value;
}

function update() {
  result.style.backgroundColor = `rgb(${red.value},${green.value},${blue.value})`;
  result.innerText = `(${red.value},${green.value},${blue.value})`;
  body.style.backgroundColor = result.style.backgroundColor;
  changeTextColor(body.style.backgroundColor);
  requestAnimationFrame(update);
}

function changeTextColor(bodycolor) {
  console.log(bodycolor);

  if (bodycolor == "rgb(255, 255, 255)") {
    body.style.color = "black";
    result.style.color = "black";
  } else {
    body.style.color = "white";
    result.style.color = "white";
  }
}
update();
