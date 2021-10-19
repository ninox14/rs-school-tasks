import { printGreeting } from "./greeting.js";



const timeElem = document.querySelector('.time');
const dateElem = document.querySelector('.date');

export function showTime () {
  const date = new Date();
  const currentTime = date.toLocaleTimeString();
  timeElem.textContent = currentTime;
  showDate();
  printGreeting();
  setTimeout(showTime, 1000);
}
showTime();

function showDate () {
  const date = new Date();
  const options = {
    weekday: 'long',
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  };
  const currentDate = date.toLocaleDateString("en-US", options);
  dateElem.textContent = currentDate;
}