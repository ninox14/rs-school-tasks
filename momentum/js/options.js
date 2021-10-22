import { printOnResponse } from "./quotes.js";
import { drawOnResponse } from "./weather.js"

const options = document.querySelector(".options-panel");
const optionsBtn = document.querySelector(".options-button");
export const langSelect = document.querySelector('.language');
const captions = document.querySelectorAll('.caption');
const optionTranslation = {
  en: {
    lang: "Language",
  },
  ru: {
    lang: "Язык",
  },
};

window.langSelected = langSelect.value;

export function translateOptions() {
  captions[0].textContent = optionTranslation[window.langSelected].lang;
}

// window.onclick = (e) => {
//   if (e.target != options && e.target != optionsBtn && e.target != document.querySelector('.option-icon')) {
//     options.classList.remove('active');
//     console.log(e.target);
//   }
// }
optionsBtn.onclick = () => {
  options.classList.toggle("active");
};

langSelect.onchange = () => {
  window.langSelected = langSelect.value;
  printOnResponse();
  drawOnResponse();
  translateOptions();
}

