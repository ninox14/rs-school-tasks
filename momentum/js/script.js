import * as timeMod  from "./time.js";
import * as greeting from "./greeting.js"
import * as images from "./images.js"
import * as weather from "./weather.js"
import * as quotes from "./quotes.js"
import * as player from "./player.js"
import * as options from "./options.js"


function setLocalStorage() {
  localStorage.setItem("city", weather.cityInput.value);
  localStorage.setItem("language", options.langSelect.value);
  localStorage.setItem("name", greeting.name.value);
}
function getLocalStorage() {
  if (localStorage.getItem("city")) {
    weather.cityInput.value = localStorage.getItem("city");
  }
  if (localStorage.getItem("name")) {
    greeting.name.value = localStorage.getItem("name");
  }
  if (localStorage.getItem("language")) {
    options.langSelect.value = localStorage.getItem("language");
    window.langSelected = options.langSelect.value;
  }
}

window.options = options;

window.addEventListener("beforeunload", setLocalStorage);
window.addEventListener("load", () => {
  getLocalStorage();
  weather.drawOnResponse();
  quotes.printOnResponse();
  options.translateOptions();
});