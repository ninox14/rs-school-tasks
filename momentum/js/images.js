import { getTimeOfDay } from "./greeting.js";


const body = document.querySelector("body");
const prevButton = document.querySelector(".slide-prev");
const nextButton = document.querySelector(".slide-next");

let timeOfDay = getTimeOfDay();
let bgNum = getRandomNum().toString().padStart(2, "0");


export function getRandomNum() {
  return Math.floor(Math.random() * 20)+1;
}

export function setBg(bgNum) {
  if (!bgNum) {
    bgNum = getRandomNum().toString().padStart(2, "0");
  }
  const img = new Image();
  img.src = `https://raw.githubusercontent.com/ninox14/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg`
  img.onload = () => {
    body.style.backgroundImage = `url('${img.src}')`;
  };
}
setBg(bgNum);

function getSlidePrev() {
  let bgNumInt = parseInt(bgNum)-1;
  if (bgNumInt == 0) {
    bgNum = `20`;
    setBg(bgNum);
    return;
  }
  bgNum = bgNumInt.toString().padStart(2, "0");
  setBg(bgNum);
}
function getSlideNext() {
  let bgNumInt = parseInt(bgNum)+1;
  if (bgNumInt == 20) {
    bgNum = `01`;
    setBg(bgNum);
    return;
  }
  bgNum = bgNumInt.toString().padStart(2, "0");
  setBg(bgNum);
}

// getSlidePrev();
prevButton.addEventListener('click', function (e) {
  getSlidePrev();
  prevButton.disabled = true;
  setTimeout(function () {
    prevButton.disabled = false;
    console.log('undisabled');
  }, 1000);
  console.log(timeOfDay, bgNum);
});
nextButton.addEventListener("click", function (e) {
  getSlideNext();
  nextButton.disabled = true;
  setTimeout(function () {
    nextButton.disabled = false;
    console.log("undisabled");
  }, 1000);
  console.log(timeOfDay, bgNum);
});