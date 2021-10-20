const cityInput = document.querySelector('.city');
const weatherIcon = document.querySelector(".weather-icon");
const temperature = document.querySelector(".temperature");
const weatherDescription = document.querySelector(".weather-description");
const wind = document.querySelector('.wind');
const humidity = document.querySelector(".humidity");
const weatherError = document.querySelector(".weather-error");

async function getWeather(lang = 'en') {
  let city = cityInput.value ? cityInput.value : 'Minsk';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=${lang}&appid=39f22f01cd236dc4f5f50624afc22468&units=metric`;
  const res = await fetch(url);
  const data = await res.json();
  // console.log(data.weather[0].icon, data.weather[0].description, data.main.temp);
  return new Promise(resolve => {
    resolve(data);
  });
}

function drawWeather(data) {
  if (data.cod == "404") {
    weatherIcon.className = "weather-icon owf";
    weatherError.textContent = data.message;
    temperature.textContent = ``;
    weatherDescription.textContent = "";
    wind.textContent = ``;
    humidity.textContent = ``;
    return;
  }
  weatherIcon.className = "weather-icon owf";
  weatherError.textContent = '';
  weatherIcon.classList.add(`owf-${data.weather[0].id}`);
  temperature.textContent = `${Math.ceil(data.main.temp)} °C`;
  weatherDescription.textContent = data.weather[0].description;
  cityInput.value = data.name;
  wind.textContent = `${Math.ceil(data.wind.speed)} m/s`;
  humidity.textContent = `${data.main.humidity} %`;
}

function setLocalStorage() {
  localStorage.setItem("city", cityInput.value);
}
function getLocalStorage() {
  if (localStorage.getItem("city")) {
    cityInput.value = localStorage.getItem("city");
  }
}

async function drawOnResponse() {
  let data = await getWeather();
  drawWeather(data);
}


window.addEventListener("beforeunload", setLocalStorage);
window.addEventListener("load", () => {
  getLocalStorage();
  drawOnResponse();
});

cityInput.addEventListener('change', function (e) {
  drawOnResponse();
});

