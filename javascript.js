
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
    timeNow.innerHTML = `${
        weekDays[dia.getDay()]
        }, ${dia.getHours()}:${dia.getMinutes()}`;
}

let maxCelcius = document.querySelector("#max-celcius");
maxCelcius.addEventListener("click", function (event) {
    document.querySelector("#max-value").innerHTML = "15ºC";
});

let minCelcius = document.querySelector("#min-celcius");
minCelcius.addEventListener("click", function (event) {
    document.querySelector("#min-value").innerHTML = "4ºC";
});

let maxFar = document.querySelector("#max-far");
maxFar.addEventListener("click", function (event) {
    document.querySelector("#max-value").innerHTML = "77ºF";
});

let minFar = document.querySelector("#min-far");
minFar.addEventListener("click", function (event) {
    document.querySelector("#min-value").innerHTML = "32ºF";
});

function showCurrentLocation(event) {

    let searchInput = document.querySelector("#form-text");
    let h2 = document.querySelector("#placeToGo");
    let currentLocation = document.querySelector("#currentLocation");
    let key = "96a2b55cf333405c0e3ab8837ae375c9";
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let apiKey = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}&units=metric`;

    placeToGo.innerHTML = `It is ${temperature} degrees,in ${response.data.name}`;
    axios.get(apiKey).then(displayweather);
    let button = document.querySelector("currentLocationBotton");
    currentLocationBotton.addEventListener("click", currentLocation);

    write_today();
}


function getCurrentLocation() {
    navigator.geolocation.getCurrentLocation(showPosition);
}
function currentTemperature(response) {
    let currentTemperature = document.querySelector("#currentLocation");
    temperature = Math.round(response.data.main.temp);
    let description = response.data.weather[0].description;

}