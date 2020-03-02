var dia = new Date();
var weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

function write_today() {
  let timeNow = document.querySelector("#time-now");
  timeNow.innerHTML = `${weekDays[dia.getDay()]}, ${getDay()}`;
}

function getDay() {
  let date = new Date();
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${hours}:${minutes}`;
}

write_today();

let celsiusTemperature = null;
let maxValue = null;
let minValue = null;
let generalWeather = null;

function displayWeather(response) {
  generalWeather = response.data.main;
  let placeToGo = document.querySelector("#placeToGo");

  let description = document.querySelector("#description");
  let wind = document.querySelector("#wind");
  maxValue = document.querySelector("#max-value");
  minValue = document.querySelector("#min-value");

  let precipitation = document.querySelector("#precipitation");
  let icon = document.querySelector("#icon");

  celsiusTemperature = generalWeather.temp;
  let temperature = Math.round(generalWeather.temp);
  placeToGo.innerHTML = `It is ${temperature}º degrees, in ${response.data.name}`;

  description.innerHTML = response.data.weather[0].description;
  wind.innerHTML = `${Math.round(response.data.wind.speed)} Km/h`;
  maxValue.innerHTML = `${Math.round(generalWeather.temp_max)} ºC`;
  minValue.innerHTML = `${Math.round(generalWeather.temp_min)} ºC`;

  precipitation.innerHTML = `${Math.round(response.data.main.humidity)} %`;

  icon.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  icon.setAttribute("alt", response.data.weather[0].description);
}
function showCelsius() {
  minValue.innerHTML = Math.round(generalWeather.temp_min);
  maxValue.innerHTML = Math.round(generalWeather.temp_max);
}

let ValueCelsius = document.querySelector("#min-celsius");
ValueCelsius.addEventListener("click", showCelsius);

function showFar() {
  minValue.innerHTML = Math.round((generalWeather.temp_min * 9) / 5 + 32);
  maxValue.innerHTML = Math.round((generalWeather.temp_max * 9) / 5 + 32);
}

let ValueFar = document.querySelector("#min-far");
ValueFar.addEventListener("click", showFar);

function showPosition(position) {
  let key = "96a2b55cf333405c0e3ab8837ae375c9";
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiKey = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}&units=metric`;

  axios.get(apiKey).then(displayWeather);
}

function showCurrentLocation() {
  navigator.geolocation.getCurrentPosition(showPosition);
}

let cLB = document.querySelector("#currentLocationBotton");
cLB.addEventListener("click", showCurrentLocation);

function showCityLocation() {
  let key = "96a2b55cf333405c0e3ab8837ae375c9";
  let name = document.querySelector("#form-text");
  let apiKey = `https://api.openweathermap.org/data/2.5/weather?q=${name.value}&appid=${key}&units=metric`;

  axios.get(apiKey).then(displayWeather);
}

let cGB = document.querySelector("#goLocation");
cGB.addEventListener("click", showCityLocation);
