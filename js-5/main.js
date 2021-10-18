/* eslint-disable no-unused-vars */
/* eslint-disable func-style */
/* eslint-disable require-jsdoc */

let currentSlide = 0;
let timerID = null;
// let container = null;
let prevIndicator = null;

// function create() {
//   carousel = document.createElement("div");
//   carousel.setAttribute("class", "carousel");
//   carousel.setAttribute("id", "carousel");
//   document.querySelector("body").prepend(carousel);
//   container = document.querySelector("#carousel");
// }

function createContainer() {
  elem = document.createElement("div");

  elem.setAttribute("id", "carousel");
  elem.setAttribute("class", "carousel");
  document.querySelector("body").appendChild(elem);

  container = document.querySelector("#carousel");
}
createContainer();

function create2(p) {
  let slides = document.createElement("ul");
  slides.setAttribute("class", "slides");

  for (let i = 0, n = p; i < n; i++) {
    let slide = document.createElement("li");
    slide.setAttribute("class", "slides__item");
    slide.innerHTML = `<a href="#"></a>`;
    i === 0 && slide.classList.add("active");
    slides.append(slide);
  }
  container.appendChild(slides);
}

function create3(p) {
  let indicators = document.createElement("div");

  indicators.setAttribute("class", "indicators");
  for (let i = 0, n = p; i < n; i++) {
    let indicator = document.createElement("span");
    indicator.setAttribute("class", "indicators__item");
    indicator.setAttribute("data-slide-to", i);
    i === 0 && indicator.classList.add("active");
    indicators.append(indicator);
  }
  container.append(indicators);
}
function createControls() {
  controlsContainer = document.createElement("div");
  controlsContainer.setAttribute("class", "controls");

  for (i = 0; i < 3; i++) {
    let controlItem = document.createElement("div");
    let controlIcon = document.createElement("i");
    const defItemClass = "controls__item";
    const defIconClass = "fas";

    switch (i) {
      case 0:
        controlItem.setAttribute("class", `${defItemClass} controls__prev`);
        controlIcon.setAttribute("class", `${defIconClass} fa-chevron-left`);
        break;
      case 1:
        controlItem.setAttribute("class", `${defItemClass} controls__next`);
        controlIcon.setAttribute("class", `${defIconClass} fa-chevron-right`);
        break;
      case 2:
        controlItem.setAttribute("class", `${defItemClass} controls__pause`);
        controlIcon.setAttribute("class", `${defIconClass} fa-play`);
        break;
    }
    controlItem.appendChild(controlIcon);
    controlsContainer.appendChild(controlItem);
  }
  container.appendChild(controlsContainer);
}

function create5() {
  let style = document.createElement("style");

  style.innerHTML = `
.slides {
  position: relative;
  height: 150px;
  padding: 0px;
  margin: 0px;
  list-style-type: none;
  position: relative;
}

.slides__item {
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  opacity: 0;
  z-index: 1;
  transition: opacity 1s;
  font-size: 40px;
  padding: 40px;
  box-sizing: border-box;
  background: #333;
  color: #fff;
}

.active {
  opacity: 1;
  z-index: 2;
}

.slides__item:nth-of-type(1) {
  background: red;
}

.slides__item:nth-of-type(2) {
  background: orange;
}

.slides__item:nth-of-type(3) {
  background: green;
}

.slides__item:nth-of-type(4) {
  background: blue;
}

.slides__item:nth-of-type(5) {
  background: purple;
}

.controls {
  position: relative;
  display: flex;
  margin: 10px 0;
}

.fas::before {
  font-size: large;
  cursor: pointer;
}

.indicators {
  display: flex;
  margin: 10px 0;
}

.indicators__item
{display: block;
width: 20px;
height: 20px;
background-color: gray;
margin: 5px ;
}`;
  container.append(style);
}

function indicatorsHandler(e) {
  let target = e.target;

  if (target.classList.contains("indicators__item")) {
    target.style.backgroundColor = "red";

    if (prevIndicator !== null) prevIndicator.removeAttribute("style");

    prevIndicator = target;
  }
}

function setListener() {
  let indicatorsContainer = document.querySelector("div.indicators");

  indicatorsContainer.addEventListener("click", indicatorsHandler);
}
function createCarousel(slidesCount = 5) {
  // ваш код здесь
  container = document.querySelector("#carousel");
  create2(slidesCount);
  create3(slidesCount);
  createControls();
  create5();

  setListener();
}

createCarousel(4);
