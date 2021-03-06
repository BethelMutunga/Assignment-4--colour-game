var diffEls = document.querySelectorAll(".diff__btn");
var diffEl = document.querySelector(".diff__btn.active").innerHTML;
var n = diffEl;
var colorsEl = document.querySelector(".colors");
var colorsBlocks;
var rgbEl = document.querySelector(".rgb");
var statusEl = document.querySelector(".status");
var header = document.querySelector("header");
var colors = [];
createBlocks(n);
resetGame();

function checkColors(e) {
  // your code here
  if (rgbEl.innerHTML === e.target.style.backgroundColor){
    statusEl.innerHTML = "You Have Won";
    for (var i = 0; i < colorsBlocks.length; i++) {
      colorsBlocks[i].style.backgroundColor = rgbEl.innerHTML;
    }
    header.style.backgroundColor = rgbEl.innerHTML;
    console.log(rgbEl.innerHTML);
    setTimeout(() =>{
      resetGame();
    }, 2000);
  } else{
    e.target.style.backgroundColor = "#fff";
  }
}

function resetGame() {
  createBlocks(n);
  document.body.style.color = "black";
  colors = [];
  pickColors();
  let pickedColor = random(n);
  rgbEl.innerHTML = colors[pickedColor];
  setColors();
  header.style.backgroundColor = "#fff";
  statusEl.innerHTML =
    "Try to guess the right color based on the RGB value by clicking on the blocks.";
}

function setColors() {
  for (var i = 0; i < colorsBlocks.length; i++) {
    colorsBlocks[i].style.backgroundColor = colors[i];
  }
}

function pickColors() {
  for (var i = 0; i < n; i++) {
    colors.push(randomColor());
  }
}

function randomColor() {
  return "rgb(" + random(255) + ", " + random(255) + ", " + random(255) + ")";
}

function random(r) {
  return Math.floor(Math.random() * r);
}

function setNumberOfTiles(e) {
  // your code here
  n = e.target.innerHTML;
  createBlocks(n);
  colors = [];
  pickColors();
  var pickedColor = random(n);
  rgbEl.innerHTML = colors[pickedColor];
  setColors();

  console.log(n);
  diffEls[0].classList.remove("active");
  diffEls[1].classList.remove("active");
  e.target.classList.add("active");

}

function createBlocks(num) {
  colorsEl.innerHTML = "";

  // here is an example of a loop that is used to create the blocks of color depending on you choice ie 6 or 9, however you need to add event listeners
  for (var i = 0; i < num; i++) {
    var block = document.createElement("div");
    block.classList.add("colors__block");
    colorsEl.appendChild(block);
  }
  colorsBlocks = document.querySelectorAll(".colors__block");
  for (var i = 0; i < colorsBlocks.length; i++) {
    colorsBlocks[i].addEventListener("click", checkColors);
  }
}
 for (var i = 0; i < diffEls.length; i++) {
  diffEls[i].addEventListener("click", setNumberOfTiles);
}
