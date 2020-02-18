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

write_today();



function displayWeather(response) {
    let temperature = Math.round(response.data.main.temp);
    //        let description = response.data.weather[0].description;

    let placeToGo = document.querySelector("#placeToGo");

    placeToGo.innerHTML = `It is ${temperature} degrees,in ${response.data.name}`;
}

function showPosition(position) {


    let key = "96a2b55cf333405c0e3ab8837ae375c9";
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let apiKey = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}&units=metric`;

    axios.get(apiKey).then(displayWeather)

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


    axios.get(apiKey).then(displayWeather)
}

let cGB = document