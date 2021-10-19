const greetingElem = document.querySelector(".greeting");
const name = document.querySelector(".name");


export function getTimeOfDay() {
  const date = new Date();
  const hours = date.getHours();
  console.log();
  switch (Math.floor(hours / 6)) {
    case 0: return 'night';
    case 1: return 'morning';
    case 2: return "afternoon";
    case 3: return "evening";
  }
}
export function printGreeting() {
  greetingElem.textContent = `Good ${getTimeOfDay()}`
}
function setLocalStorage() {
  localStorage.setItem("name", name.value);
}
function getLocalStorage() {
  if (localStorage.getItem("name")) {
    name.value = localStorage.getItem("name");
  }
}


window.addEventListener("beforeunload", setLocalStorage);
window.addEventListener("load", getLocalStorage);